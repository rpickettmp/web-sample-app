/* eslint-disable no-console */
import {
    HashRouter,
    Routes,
    Route,
} from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import mParticle from '@mparticle/web-sdk';
// import appboyKit from '@mparticle/web-appboy-kit';
// import googleanalyticsKit from '@mparticle/web-google-analytics-kit';
import MediaSession from '@mparticle/web-media-sdk';
import sideloadedKit from 'sideloaded-kit-example';
import { ThemeProvider } from '@mui/material/styles';
import { NavigationMenu } from '../../components/NavigationMenu';
import { ShopPage } from '../../pages/ShopPage';
import { AboutPage } from '../../pages/AboutPage';
import './index.css';
import theme from '../../contexts/theme';
import { ProductDetailPage } from '../../pages/ProductDetailPage';
import { CartPage } from '../../pages/CartPage';
import OrderDetailsProvider from '../../contexts/OrderDetails';
import UserDetailsProvider from '../../contexts/UserDetails';
import { AccountPage } from '../../pages/AccountPage';
import { APIKeyHeaderBar } from '../../components/APIKeyHeaderBar';
import APIKeyContextProvider from '../../contexts/APIKeyContext';
import useApiKey from '../../hooks/useAPIKey';
import { StartShoppingModal } from '../../components/StartShoppingModal';
import PersonaliseContextProvider from '../../contexts/PersonaliseContext';

const brazeKit = require('@mparticle/web-braze-kit');
const googleanalyticsKit = require('@mparticle/web-google-analytics-4-client-kit');
const braze = require('@braze/web-sdk');
const brazeServiceWorker = require('@braze/service-worker');

// (optional) Use the package version number to keep your appVersion up-to-date
const { version } = require('../../../package.json');

const App = () => {

    // const location = useLocation();
    // const background = location.state && location.state.background;
    const mParticleConfig: mParticle.MPConfiguration = {
        // (optional) `appName and appVersion are used to associate with your web app
        // and are included in all event uploads
        appName: 'Remotion eShop',
        appVersion: version,
        // `package` is an optional analytics attribute that mParticle
        //  uses to measure usage and diagnostics of the Sample Apps.
        //  In a production application, you can safely remove this, or set
        //  it to your own value to help with diagnostics.
        package: 'com.mparticle.example.eShopSampleApp',

        // Sets to Dev Mode
        isDevelopmentMode: true,

        dataPlan: {
            planId: 'hm',
            planVersion: 1,
        },

        // logLevel can be 'verbose', 'warning', or 'none' (the default is 'warning').
        // This logLevel provides context into the inner workings of mParticle.
        // It can be updated after MP has been initialized using mParticle.setLogLevel().
        // and passing.  Logs will be available in the inspector.
        // More can be found at https://docs.mparticle.com/developers/sdk/web/custom-logger/
        logLevel: 'verbose',

        // This callback will be called when mParticle successfully initializes
        // and will return any known User Identities from mParticle.
        // You can then synchronize this user data with any services that are
        // unique to your application.
        identityCallback: (result) => {
            if (result.getUser()) {
                // User has been identified
                // proceed with any custom logic that requires a valid, identified user

                const user = result.getUser();
                const { userIdentities } = user.getUserIdentities();

                // For demonstration purposes, we are printing out the known values for a user
                // to the console. An example of a use case for this callback might be to sync
                // the identity of a user with your own authentication logic
                Object.keys(userIdentities).forEach((identity) => {
                    console.log(
                        'User Identity Value: ',
                        identity,
                        userIdentities[
                            identity as keyof mParticle.UserIdentities
                        ],
                    );
                });
            } else {
                // the IDSync call failed
            }
        },

        // Sideloaded kits can be used to receive callbacks when various things
        // happen such as events being logged.  You can use them to debug the
        // events going to your forwarders, or if you want to create a kit for a
        // third party SDK that we don't yet support.
        // This example is a simple implementation that only logs the callbacks
        // and event received to the console, but the data in the callbacks can
        // be used for anything.
        // Please read our docs about sideloaded kits at
        // https://docs.mparticle.com/developers/sdk/web/kits/#sideloaded-kits-custom-kits
        // NOTE: Sideloaded kits are always active.
        sideloadedKits: [sideloadedKit],
    };

    // In a true production implementation, you should load your mParticle API Key via
    // an environment variable.
    // For example:
    //
    // const apiKey = process.env.REACT_APP_MPARTICLE_API_KEY;
    //
    // As this is an interactive sample app, we are using a custom hook to
    // allow an API Key to be modified in run time.

    const [apiKey] = useApiKey();

    // It is however recommended that once the API Key is instantiated,
    // that you use a `useEffect` statement like the example below so that
    // mParticle initializes immediately once your App component is mounted.

    useEffect(() => {
        if (apiKey) {
            mParticle.init(apiKey, mParticleConfig);
            googleanalyticsKit.register(mParticleConfig);
            braze.initialize('79fdc5ce-2cab-4986-9317-55fd517ebc1d', {
                baseUrl: 'sdk.iad-03.braze.com',
                enableLogging: true,
                noCookies: true,
                /* manageServiceWorkerExternally: false,
                serviceWorkerLocation:
                    'https://demo.mp.com:3000/service-worker.js', */
            });
            braze.automaticallyShowInAppMessages();
            braze.requestPushPermission();
            braze.openSession();
        } else {
            console.error('Please add your mParticle API Key');
        }
    }, [apiKey]);

    return (
        <div className='App'>
            <ThemeProvider theme={theme}>
                <HashRouter basename='/'>
                    <UserDetailsProvider>
                        <OrderDetailsProvider>
                            <APIKeyContextProvider>
                                <StartShoppingModal />
                                <APIKeyHeaderBar />
                                <PersonaliseContextProvider>
                                    <NavigationMenu />
                                    <Routes>
                                        <Route
                                            path='/'
                                            element={<ShopPage />}
                                        />
                                        <Route
                                            path='/shop/:category'
                                            element={<ShopPage />}
                                        />
                                        <Route
                                            path='/about'
                                            element={<AboutPage />}
                                        />
                                        <Route
                                            path='/account'
                                            element={<AccountPage />}
                                        />
                                        <Route
                                            path='/cart'
                                            element={<CartPage />}
                                        />
                                        <Route
                                            path='/products/:id'
                                            element={<ProductDetailPage />}
                                        />
                                    </Routes>
                                </PersonaliseContextProvider>
                            </APIKeyContextProvider>
                        </OrderDetailsProvider>
                    </UserDetailsProvider>
                </HashRouter>
            </ThemeProvider>
        </div>
    );
};

export default App;
