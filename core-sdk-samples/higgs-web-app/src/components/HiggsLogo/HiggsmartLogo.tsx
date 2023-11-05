import { Box } from '@mui/material';
// import logo from '../../assets/images/higgsmart-logo.svg';
import logo from '../../assets/images/drm-logo-desktop.svg';

const HiggsmartLogo = () => (
    <Box
        component='img'
        src={logo}
        alt='HiggsMart'
        sx={{ width: 'auto', height: 60 }}
    />
);

export default HiggsmartLogo;
