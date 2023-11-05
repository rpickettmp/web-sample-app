// TS incorrectly flags function declarations as unused variables
/* eslint-disable no-unused-vars */
import React, {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react';
import { useSearchParams } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';

interface UserProfileContextStore {
    mPID: string;
    userProfile: string | undefined;
    setLocalUserProfile(userProfile: string): void;
    removeLocalUserProfile(): void;
}

const UserProfileContext = createContext({} as UserProfileContextStore);

export function useUserProfileContext(mPID: string) {
    const context = useContext(UserProfileContext);

    if (!context) {
        throw new Error(
            'useUserProfileContext must be used within a UserProfileContextProvider',
        );
    }

    return context;
}

const UserProfileContextProvider: React.FC<{ mPID: string }> = ({ mPID }) => {
    const [accessToken, setAccessToken] = useState('');
    const [userProfile, setUserProfile] = useState('');
    fetch('https://sso.auth.mparticle.com/oauth/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
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
            console.log(`Error: ${response}`);
            if (!response.ok) {
                console.log(`Error: ${response.statusText}`);
                throw new Error(response.statusText);
            }
            return response.json()
        })
        .then((data) => setAccessToken(data.access_token));
    fetch(
        `https://api.mparticle.com/userprofile/v1//userprofile/v1/5000011/167/432/${mPID}`,
        {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            mode: 'no-cors',
        },
    )
        .then((response) => response.json())
        .then((data) => setUserProfile(data));
    const [
        localStorageUserProfile,
        setLocalStorageUserProfile,
        removeLocalStorageUserProfile,
    ] = useLocalStorage('UserProfile', userProfile);
    const [searchParams, setSearchParams] = useSearchParams();

    const queryParamMPID = searchParams.get(mPID);

    const value = useMemo(() => {
        const setLocalUserProfile = (key: string) => {
            setLocalStorageUserProfile(key);
            window.location.reload();
        };

        const removeLocalUserProfile = () => {
            removeLocalStorageUserProfile();
            window.location.reload();
        };

        return {
            mPID,
            userProfile,
            setLocalUserProfile,
            removeLocalUserProfile,
        };
    }, [localStorageUserProfile]);

    return <UserProfileContext.Provider value={value} />;
};

export default UserProfileContextProvider;
