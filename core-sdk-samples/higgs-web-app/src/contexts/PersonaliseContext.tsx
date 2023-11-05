// TS incorrectly flags function declarations as unused variables
/* eslint-disable no-unused-vars */
import React, {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react';
import { PersonalisePage } from '../pages/PersonalisePage';

interface PersonaliseContextStore {
    personaliseModalMode: boolean;
    setPersonaliseModalMode(personaliseModalMode: boolean): void;
}

const PersonaliseContext = createContext({} as PersonaliseContextStore);

export function usePersonaliseContext() {
    const context = useContext(PersonaliseContext);

    if (!context) {
        throw new Error(
            'usePersonaliseContext must be used within a PersonaliseContextProvider',
        );
    }

    return context;
}

const PersonaliseContextProvider: React.FC = ({ children }) => {
    const [ personaliseModalMode, setPersonaliseModalMode ] = useState(false);
    const [profileData, setProfileData] = useState({
        'user_profile': {
            'user_identities': [],
            'user_attributes': {},
            'audience_memberships': [],
        },
    });

    const value = useMemo(() => {
        return {
            personaliseModalMode,
            setPersonaliseModalMode,
            profileData,
        };
    }, [personaliseModalMode, setPersonaliseModalMode, profileData]);

    return (
        <PersonaliseContext.Provider value={value}>
            <PersonalisePage
                isOpen={personaliseModalMode}
            />
            {children}
        </PersonaliseContext.Provider>
    );
};

export default PersonaliseContextProvider;
