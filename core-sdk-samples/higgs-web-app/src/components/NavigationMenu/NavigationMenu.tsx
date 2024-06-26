import React, { ReactElement, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    AppBar,
    Box,
    Badge,
    Container,
    Toolbar,
    CssBaseline,
    MenuList,
    MenuItem,
    IconButton,
    alpha,
    Button,
} from '@mui/material';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import MaleSharpIcon from '@mui/icons-material/MaleSharp';
import FemaleSharpIcon from '@mui/icons-material/FemaleSharp';
import GradeSharpIcon from '@mui/icons-material/GradeSharp';
import mParticle from '@mparticle/web-sdk';
import { usePersonaliseContext } from '../../contexts/PersonaliseContext';
import NavigationMenuItem from './NavigationMenuItem';
import NavigationMenuDrawer from './NavigationMenuDrawer';
import HiggsmartLogo from '../HiggsLogo/HiggsmartLogo';
import theme from '../../contexts/theme';
import { useOrderDetails } from '../../contexts/OrderDetails';
import useApiKey from '../../hooks/useAPIKey';
import { useAPIKeyContext } from '../../contexts/APIKeyContext';
import { MODAL_MODES, SAMPLE_APP_GITHUB_REPOSITORY_URL } from '../../constants';
import { useUserDetails } from '../../contexts/UserDetails';

const NavigationMenu: React.FC = () => {
    const { numberOfProducts } = useOrderDetails();
    const { setModalMode } = useAPIKeyContext();
    const { personaliseModalMode, setPersonaliseModalMode } = usePersonaliseContext();
    const { user, isLoggedIn, login, logout } = useUserDetails();
    const [, isHosted] = useApiKey();

    const classes = {
        appBar: {},
        drawer: {},
        drawerBox: {
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            height: '100%',
        },
        link: {
            mx: 3,
            '&:hover': {
                color: theme.palette.primary.main,
                backgroundColor: alpha(theme.palette.primary.main, 0.08),
            },
        },
        drawerList: {
            width: 304,
        },
        lowerDrawerList: {
            width: 304,
            ml: 3,
        },
        drawerLinkIcon: {
            ml: 3,
            mr: 6,
        },
        drawerLink: {
            color: alpha(theme.palette.primary.contrastText, 0.6),
            height: 60,
            width: 1,
            '&:hover': {
                color: theme.palette.primary.main,
                backgroundColor: alpha(theme.palette.primary.main, 0.08),
            },
        },
        topnavList: { display: 'flex' },
        topnavLinkIcon: {
            mx: 3,
        },
        homeLink: {},
        mobileResponsive: {
            flexGrow: 1,
            display: { xs: 'flex', md: 'none' },
            alignItems: 'stretch',
            justifyContent: 'space-between',
        },
        desktopResponsive: {
            flexGrow: 1,
            display: {
                xs: 'none',
                md: 'flex',
            },
            alignItems: 'center',
            justifyContent: 'center',
        },
    };

    const [drawerState, setDrawerState] = useState(false);

    const trackNavClick = (label: string) => {
        // In cases where you need to track non-standard navigation clicks
        // such as navigation icons or a hamburger menu, it is recommended
        // that you treat these as custom navigation events and define a label
        // in the custom attributes that you pass to mParticle.
        // This can then be added to your component's onClick prop.
        const customAttributes: mParticle.SDKEventAttrs = {
            label,
        };

        mParticle.logEvent(
            'Navbar Click',
            mParticle.EventType.Navigation,
            customAttributes,
        );
    };

    const handleHamburgerClick = () => {
        trackNavClick('Hamburger');

        setDrawerState(true);
    };

    const closeDrawer = () => {
        setDrawerState(false);
    };

    const togglePersonaliseModalMode = () => {
        setPersonaliseModalMode(!personaliseModalMode);
    };

    // The following mobile items use the trackNav convenience
    // method defined above
    const topNavMobileItems: ReactElement[] = [
        <IconButton
            aria-label='Open Mobile Menu'
            data-testid='mobile-nav-hamburger-button'
            key='hamburger'
            size='large'
            color='inherit'
            onClick={handleHamburgerClick}
        >
            <MenuIcon />
        </IconButton>,

        <MenuItem
            aria-label='Mobile Home Page'
            data-testid='mobile-nav-home-button'
            key='home'
            component={Link}
            to='/'
            onClick={() => trackNavClick('Home')}
            sx={[classes.link, classes.homeLink]}
        >
            <HiggsmartLogo />
        </MenuItem>,

        <IconButton
            data-testid='mobile-nav-cart-button'
            key='cart'
            size='large'
            color='inherit'
            component={Link}
            to='/cart'
            onClick={() => trackNavClick('Cart Icon')}
        >
            <Badge badgeContent={numberOfProducts} color='primary'>
                <ShoppingCartIcon />
            </Badge>
        </IconButton>,
    ];

    // The following desktop navigation items use mParticle.logEvent
    // internally so that they stay DRY and handle optional callbacks.
    const topNavDesktopItems: ReactElement[] = [
        <NavigationMenuItem
            testId='desktop-nav-shop-button'
            component={Link}
            to='/shop/all'
            sx={[
                classes.link,
                classes.homeLink,
                {
                    fontSize: 40,
                    fontWeight: 'bold',
                    fontStyle: 'bold',
                    '&.Mui-selected': { 
                        backgroundColor: '#0E1014',
                    },
                },
            ]}
            label='ALL'
            key='All'
        />,

        <NavigationMenuItem
            testId='desktop-nav-women-button'
            component={Link}
            to='/shop/women'
            sx={[
                classes.link,
                classes.homeLink,
                {
                    fontSize: 40,
                    fontWeight: 'bold',
                    fontStyle: 'bold',
                    '&.Mui-selected': { 
                        backgroundColor: '#0E1014',
                    },
                },
            ]}
            label='WOMEN'
            key='Women'
        />,

        <NavigationMenuItem
            testId='desktop-nav-kids-button'
            component={Link}
            to='/shop/kids'
            sx={[
                classes.link,
                classes.homeLink,
                {
                    fontSize: 40,
                    fontWeight: 'bold',
                    fontStyle: 'bold',
                    '&.Mui-selected': { 
                        backgroundColor: '#0E1014',
                    },
                },
            ]}
            label='KIDS'
            key='Kids'
        />,

        <MenuItem
            data-testid='desktop-nav-home-button'
            aria-label='Desktop Home Page'
            key='home'
            component={Link}
            to='/'
            sx={[
                classes.link,
                classes.homeLink,
                {
                    fontSize: 40,
                    fontWeight: 'bold',
                    fontStyle: 'bold',
                    '&.Mui-selected': { 
                        backgroundColor: '#0E1014',
                    },
                },
            ]}
        >
            <HiggsmartLogo />
        </MenuItem>,

        <IconButton
            aria-label='Account'
            data-testid='desktop-nav-account-button'
            component={Link}
            to='/account'
            sx={classes.link}
            key='Account'
            size='large'
        >
            <Badge color='primary'>
                {isLoggedIn?<LogoutIcon sx={[
                    classes.topnavLinkIcon,
                    { fontSize: 40 },
                ]} /> : <LoginIcon sx={[
                    classes.topnavLinkIcon,
                    { fontSize: 40 },
                ]} />}
            </Badge>
        </IconButton>,

        <IconButton
            aria-label='Cart'
            data-testid='desktop-nav-cart-button'
            component={Link}
            to='/cart'
            sx={classes.link}
            key='Cart'
            size='large'
        >
            <Badge badgeContent={numberOfProducts} color='primary'>
                <ShoppingCartIcon sx={[
                    classes.topnavLinkIcon,
                    { fontSize: 40 },
                ]} />
            </Badge>
        </IconButton>,

        <Badge color='primary' key='Personalise'>
            <Button onClick={togglePersonaliseModalMode} sx={[
                classes.topnavLinkIcon,
                {
                    fontSize: 14,
                    borderRadius: '6%',
                    backgroundColor: '#f9f8f5',
                    border: 'none',
                    color: '#0E1014',
                    height: '49%',
                    my: '20px',
                },
            ]}>
                REWARDS
            </Button>
        </Badge>,

    ];

    const drawerMenuItems: ReactElement[] = [
        <NavigationMenuItem
            testId='drawer-nav-shop-button'
            key='shop'
            component={Link}
            to='/shop'
            sx={classes.drawerLink}
            clickCallback={closeDrawer}
            label='Shop'
            iconLeft={<CheckroomIcon sx={classes.drawerLinkIcon} />}
        />,

        <NavigationMenuItem
            testId='drawer-nav-account-button'
            key='account'
            component={Link}
            to='/account'
            sx={classes.drawerLink}
            clickCallback={closeDrawer}
            label='Account'
            iconLeft={<LoginIcon sx={classes.drawerLinkIcon} />}
        />,

        <NavigationMenuItem
            testId='drawer-nav-cart-button'
            key='cart'
            component={Link}
            to='/cart'
            sx={classes.drawerLink}
            clickCallback={closeDrawer}
            iconLeft={
                <Badge badgeContent={numberOfProducts} color='primary'>
                    <ShoppingCartIcon sx={classes.drawerLinkIcon} />
                </Badge>
            }
            label='Cart'
        />,

        <NavigationMenuItem
            testId='drawer-nav-personalise-button'
            key='personalise'
            component={Link}
            to='/personalise'
            sx={classes.drawerLink}
            clickCallback={closeDrawer}
            iconLeft={
                <Badge badgeContent={numberOfProducts} color='primary'>
                    <PersonIcon sx={classes.drawerLinkIcon} />
                </Badge>
            }
            label='Personalise'
        />,
    ];

    const lowerDrawerMenuItems: ReactElement[] = [
        <MenuItem
            key='web-key'
            sx={classes.drawerLink}
            onClick={() => setModalMode(MODAL_MODES.UPDATE)}
        >
            Web Key
        </MenuItem>,

        <MenuItem
            key='github-a'
            component='a'
            target='_blank'
            href={SAMPLE_APP_GITHUB_REPOSITORY_URL}
        >
            Go to Github Repo
        </MenuItem>,
    ];

    return (
        <AppBar position='static' sx={classes.appBar} color='transparent'>
            <CssBaseline />
            <Container maxWidth='xl'>
                <NavigationMenuDrawer
                    testId='drawer-menu'
                    sx={classes.drawer}
                    toggleState={drawerState}
                    handleDrawerClose={closeDrawer}
                >
                    <Box sx={classes.drawerBox}>
                        <MenuList sx={classes.drawerList}>
                            {drawerMenuItems}
                        </MenuList>

                        {isHosted && (
                            <MenuList sx={classes.lowerDrawerList}>
                                {lowerDrawerMenuItems}
                            </MenuList>
                        )}
                    </Box>
                </NavigationMenuDrawer>
                <Toolbar disableGutters>
                    <Box sx={classes.mobileResponsive}>{topNavMobileItems}</Box>
                    <Box sx={classes.desktopResponsive}>
                        <MenuList sx={classes.topnavList}>
                            {topNavDesktopItems}
                        </MenuList>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavigationMenu;
