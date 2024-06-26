/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import mParticle from '@mparticle/web-sdk';
import {
    Grid,
    DialogContent,
    Typography,
    Box,
    DialogActions,
    Button,
    FormControl,
    InputAdornment,
    TextField,
} from '@mui/material';
import HMLogo from '../../assets/images/H&M-Logo.svg.png';
import SalesImage from '../../assets/images/hmoffer.png';
import DiscountTopImage from '../../assets/images/bannertop.png';
import DiscountBottomImage from '../../assets/images/bannerbottom.png';
import { ModalContainer } from '../../components/ModalContainer';
import { usePersonaliseContext } from '../../contexts/PersonaliseContext';
import { useUserDetails } from '../../contexts/UserDetails';

interface PersonaliseModalProps {
    isOpen?: boolean;
}

const PersonalisePage: React.FC<PersonaliseModalProps> = ({
    isOpen,
}) => {
    const [openModalA, setOpenModalA] = useState(false);
    const [openModalB, setOpenModalB] = useState(false);
    const [openModalC, setOpenModalC] = useState(false);
    const { personaliseModalMode, setPersonaliseModalMode } = usePersonaliseContext();
    const [email, setEmail] = React.useState('');
    const { user, isLoggedIn, login, logout } = useUserDetails();
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setEmail(event.target.value);
    };
    const currUser = mParticle.Identity.getCurrentUser();

    interface AudienceMembership {
        audience_id: number;
        audience_name: string;
        expiration_timestamp_ms: number | null;
    }

    function isInAudience(membershipList: AudienceMembership[], audienceName: string) {
        if (membershipList.length > 0) {
            for (let i=0; i< membershipList.length; i += 1) {
                if (membershipList[i].audience_name === audienceName) {
                    return true;
                }
            }
        }
        return false;
    }

    const closeModal = () => {
        setOpenModalA(false);
        setOpenModalB(false);
        setOpenModalC(false);
        setPersonaliseModalMode(false);
    };

    const handleSignUpButtonClick = () => {
        if (email) {
            const customAttributes: mParticle.SDKEventAttrs = { 
                'Subscriber Email': email,
                'Subscription Date': `${new Date().toISOString().split('T')[0]}T00:00:00+00:00`,
                'Subscription Type': 'Newsletter',
            };
            mParticle.logEvent(
                'Subscribe Newsletter',
                mParticle.EventType.Transaction,
                customAttributes,
            );
            currUser.setUserAttribute('Newsletter Subscriber', 'true');
            const identityRequest: mParticle.IdentityApiData = {
                userIdentities: {
                    email: `${email}`,
                },
            };
            const identityCallback: mParticle.IdentityCallback = (result) => {
            };
            mParticle.Identity.login(identityRequest, identityCallback);
        }
        setEmail('');
        closeModal();
    };
    const handleCampaignButtonClick = () => {
        const customAttributes: mParticle.SDKEventAttrs = {
            'Campaign ID': '802368',
            "Campaign Name": "2024 New Customer Offer",
        };
        mParticle.logEvent(
            'Campaign Viewed',
            mParticle.EventType.Other,
            customAttributes,
        );
        closeModal();
    };
    const handleDiscountButtonClick = () => {
        const customAttributes: mParticle.SDKEventAttrs = {
            'Campaign ID': '802368',
            "Campaign Name": "2024 New Customer Offer",
        };
        mParticle.logEvent(
            'Discount Viewed',
            mParticle.EventType.Other,
            customAttributes,
        );
        closeModal();
    };
    const handleBackgroundClick = () => {
        closeModal();
    };

    useEffect(() => {
        if (currUser && isOpen) { 
            fetch(
                `https://5x473j7afu6yhcmohllfu2utkq0fkwni.lambda-url.us-east-1.on.aws/profile?wSID=1042&mPID=${currUser.getMPID()}`,
                // `https://demo.mp.com/mp/profile?wSID=432&mPID=${currUser.getMPID()}`,
            )
                .then((response) => response.json())
                .then((data) => {
                    console.log(`Fetched Profile: ${JSON.stringify(data)}`);
                    if (
                        data.audience_memberships &&
                        data.audience_memberships.length > 0  &&
                        isInAudience(data.audience_memberships, 'Cart Abandonment')        
                    ) {
                        setOpenModalC(isOpen || false);
                    } else if (
                        data.user_attributes &&
                        'newsletter Subscriber' in data.user_attributes &&
                        data.user_attributes['newsletter Subscriber'] === 'true'
                    ) {
                        setOpenModalB(isOpen || false);
                    } else {
                        setOpenModalA(isOpen || false);
                    }
                });
        } else {
            setOpenModalA(isOpen || false);
        }
    }, [isOpen]);

    return (
        <>
            <ModalContainer
                isOpen={openModalA}
                handleClose={handleBackgroundClick}
            >
                <Grid item>
                    <Box
                        sx={{
                            width: 210,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <Box
                            component='img'
                            src={HMLogo}
                            alt='H&M Logo'
                            sx={{
                                width: '100%',
                                height: 'auto',
                            }} />
                        <Typography
                            variant='subtitle2'
                            sx={{
                                color: '#f9f8f5',
                                textTransform: 'uppercase',
                                fontSize: '20px',
                                letterSpacing: '4px',
                            }}
                        >
                            REWARD
                        </Typography>
                    </Box>
                </Grid>
                <Grid item>
                    <DialogContent>
                        <Typography variant='body1' align='center'>
                            Enjoy 20% off* your first order when you sign up to H&M Reward
                        </Typography>
                    </DialogContent>
                </Grid>
                <Grid
                    item
                    sx={{
                        mb: 2,
                    }}
                >
                    <FormControl>
                        <TextField
                            id='email'
                            fullWidth
                            label='Email: '
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start' />
                                ),
                            }}
                            value={email}
                            onChange={handleChange}
                            sx={{
                                width: '36ch',
                                maxWidth: '36ch',
                            }} />
                    </FormControl>
                </Grid>
                <Grid item>
                    <DialogActions>
                        <Button variant='contained' onClick={handleSignUpButtonClick}>
                            SIGN UP
                        </Button>
                    </DialogActions>
                </Grid>
                <Grid item>
                    <Typography
                        variant='caption'
                        align='center'
                        sx={{
                            // For some reason, 'caption' generates a span in MUI
                            // which isn't a block level and won't center properly
                            display: 'block',
                            m: 1,
                        }}
                    >
                        * This app is for demo purposes only. We do not store any
                        information submitted.
                    </Typography>
                </Grid>
            </ModalContainer>
            <ModalContainer isOpen={openModalB} handleClose={handleBackgroundClick}>
                <Grid item>
                    <Box
                        component='img'
                        src={SalesImage}
                        alt='H&M'
                        sx={{
                            width: '100%',
                            height: 'auto',
                        }}
                        onClick={handleCampaignButtonClick}
                    />
                </Grid>
                <Grid item sx={{p: 1}}>
                    <DialogActions>
                        <Button
                            variant='contained'
                            sx={{color: 'black', backgroundColor: '#f9f8f5'}}
                            onClick={handleCampaignButtonClick}
                        >
                            SHOP ALL
                        </Button>
                    </DialogActions>
                </Grid>
            </ModalContainer>
            <ModalContainer isOpen={openModalC} handleClose={handleBackgroundClick}>
                <Grid item>
                    <Box
                        sx={{
                            width: 610,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            backgroundColor: '#DC281F',
                        }}
                    >
                        <Box
                            component='img'
                            src={DiscountTopImage}
                            alt='Discount-Top-Image'
                            sx={{
                                width: '100%',
                                height: 'auto',
                            }} />
                        <DialogContent>
                            <Typography variant='h5' align='center' color='#f9f8f5'>           
                                DON&lsquo;T FORGET...
                            </Typography>
                            <Typography variant='body1' align='center' color='#f9f8f5' sx={{alignItems: 'center', justifyContent: 'center', m: 0.02, p: 0.02}}>
                                <br />
                                Your discount code is waiting for you. Follow the link below for 20% off your first purchase. Hurry, before it expires.
                            </Typography>
                        </DialogContent>
                        <DialogActions>
                            <Button
                                variant='contained'
                                sx={{color: '#000000', backgroundColor: '#f9f8f5'}}
                                onClick={handleDiscountButtonClick}
                            >
                                APPLY 20% OFF
                            </Button>
                        </DialogActions>
                        <Box
                            component='img'
                            src={DiscountBottomImage}
                            alt='Discount-Bottom-Image'
                            sx={{
                                width: '100%',
                                height: 'auto',
                            }} />
                    </Box>
                </Grid>
            </ModalContainer>
        </>
    );
};

PersonalisePage.defaultProps = {
    isOpen: false,
};

export default PersonalisePage;
