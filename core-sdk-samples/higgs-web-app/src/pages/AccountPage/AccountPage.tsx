import { Box, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import mParticle from '@mparticle/web-sdk';
import axios from 'axios';
import { Page } from '../../layouts/Page';
import { useUserDetails } from '../../contexts/UserDetails';
import { AccountDetails, LoginView } from '../../features/AccountDetails';

// This Page demonstrates mParticle's IDSync functionality.
// In this example, we are only using 'Login' and 'Logout' Identity Requests. To
// learn more about many of the other features, please visit our Doc Site:
// https://docs.mparticle.com/developers/sdk/web/idsync/

const AccountPage = () => {
    const [accessToken, setAccessToken] = useState('');
    const [userProfile, setUserProfile] = useState('');
    // For demonstration purposes, our account page simply controls whether our
    // user has been logged in or not. In most cases, you would handle authentication
    // and security through other means, and then have mParticle integrated into that
    // process.
    // In our use case, we are simply using a React Context Provider to share logged in
    // and basic user states across the application
    const { user, isLoggedIn, login, logout } = useUserDetails();
    const [mPID, setMPID] = useState('');

    const handleLogIn = (myid: string) => {
        // For our example, we are simulating an external login service
        // that simply returns a user object if the login was 'successful'
        // Our Sample App does not authenticate or authorize a user, and we
        // do not handle passwords.
        const myUser = login(myid);

        // const { email, customerid } = myUser;
        const { email, customerid } = myUser;
        // console.log(`Console: ${email}`);

        // Our Sample App uses mock data based on what is entered into the UI.
        // To demonstrate our configuration, we are explicitly declaring that
        // we are using a custom customer ID and email address to identify our
        // 'customer'. mParticle supports many other forms of identity to
        // identify users.
        // Visit our Docs for more details:
        // https://docs.mparticle.com/developers/sdk/web/idsync/#supported-identity-types
        const identityRequest: mParticle.IdentityApiData = {
            userIdentities: {
                customerid: `${customerid}`,
                email: `${email}`,
            },
        };

        const identityCallback: mParticle.IdentityCallback = (result) => {
            if (result.getUser()) {
                // Handle any necessary post-login actions
                const currUser = result.getUser();
                setMPID(currUser.getMPID());
                currUser.setUserAttribute('$FirstName', 'James');
                currUser.setUserAttribute('$LastName', 'Bond');
                currUser.setUserAttribute('$Country', 'United Kingdom');
                currUser.setUserAttribute('$City', 'London');
                currUser.setUserAttribute('$Postcode', 'W1F 9QW');

                const marketingConsent = mParticle.Consent.createGDPRConsent(
                    true, // Consented
                    Date.now(), // Timestamp
                    'marketing_agreement_v7', // Document
                    'London', // Location
                    `DAS: ${mParticle.getDeviceId()}`, // Hardware ID
                );
                const analyticsConsent = mParticle.Consent.createGDPRConsent(
                    true, // Consented
                    Date.now(), // Timestamp
                    'analytics_agreement_v6', // Document
                    'London', // Location
                    `DAS: ${mParticle.getDeviceId()}`, // Hardware ID
                );
                const consentState = mParticle.Consent.createConsentState();
                consentState.addGDPRConsentState('Marketing', marketingConsent);
                consentState.addGDPRConsentState('Analytics', analyticsConsent);
                currUser.setConsentState(consentState);

                /*
                fetch(`
                    https://demo.mp.com/mp/profile?wSID=432&mPID=${currUser.getMPID()}`)
                    .then((response) => response.json())
                    .then((data) => {
                        const profileData = data;
                        setUserProfile(profileData);
                        localStorage.setItem(
                            `${currUser.getMPID()}`,
                            JSON.stringify(profileData),
                        );
                    });
                fetch('https://demo.mp.com:2888/oauth/token', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8',
                    },
                    body: JSON.stringify({
                        client_id: 'wawVx2Ejl0K2FUo79pyr6CQWyRmEuXSE',
                        client_secret:
                            'zK57_GIo6de0UHThW7iVEac3d6od4pRVDD0GbAcuaEpRZtlBTeXw0bxYf4KIhhvA',
                        audience: 'https://api.mparticle.com',
                        grant_type: 'client_credentials',
                    }),
                    mode: 'no-cors',
                })
                    .then((response) => {
                        // console.log(`Status: ${response.ok}`);
                        if (!response.ok) {
                            // console.log(`Error: ${response.json()}`);
                            // throw new Error(response.statusText);
                        }
                        return response.json();
                    })
                    .then((data) => {
                        console.log(`Error: ${data}`);
                        setAccessToken(data.access_token);
                    });
                axios
                    .get(
                        `https://demo.mp.com:2888/userprofile/v1/5000011/167/432/${mPID}?fields=user_identities,user_attributes,audience_memberships,attribution`,
                        {
                            headers: {
                                Authorization: `Bearer ${accessToken}`,
                            },
                        },
                    )
                    .then((response) => {
                        setUserProfile(response?.data);
                    }); */
            }
        };

        mParticle.Identity.login(identityRequest, identityCallback);
    };

    const handleLogout = () => {
        const identityCallback: mParticle.IdentityCallback = (result) => {
            if (result.getUser()) {
                console.log(`Removed Previous User's localStorage: ${result.getPreviousUser().getMPID()}`);
                localStorage.removeItem(result.getPreviousUser().getMPID());
                // Handle any necessary post-login actions
            }
        };
        // As we are logging out, we no longer need to pass any custom
        // User Identities. However, there may be use cases where you want
        // want to pass in identities.
        // For more examples:
        // https://docs.mparticle.com/developers/sdk/web/idsync/#login-and-logout
        mParticle.Identity.logout({}, identityCallback);

        // As an example, we are formally logging the user out seperately from
        // any mParticle logging actions
        logout();
    };

    /* const renderAccountView = () => {
        if (isLoggedIn && user) {
            return (
                <>
                    <AccountDetails
                        username={user.email}
                        logoutAction={handleLogout}
                    />
                    <UserProfileContextProvider {...{ mPID }} />
                </>
            );
        }
        return <LoginView loginAction={handleLogIn} />;
    }; */

    const renderAccountView = () => {
        if (isLoggedIn && user) {
            return (
                <AccountDetails
                    username={user.email}
                    logoutAction={handleLogout}
                />
            );
        }
        return <LoginView loginAction={handleLogIn} />;
    };

    return (
        <Page>
            <Box
                sx={{
                    my: 5,
                }}
            >
                <Typography variant='h3'>My Account</Typography>
            </Box>
            <Grid
                container
                rowSpacing={2}
                columns={1}
                direction='column'
                alignItems='center'
                justifyContent='center'
                sx={{
                    my: 5,
                }}
            >
                {renderAccountView()}
            </Grid>
        </Page>
    );
};

export default AccountPage;
