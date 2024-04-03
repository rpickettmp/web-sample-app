import { Box } from '@mui/material';
// import logo from '../../assets/images/higgsmart-logo.svg';
import logo from '../../assets/images/H&M-Logo.svg.png';

const HiggsmartLogo = () => (
    <Box
        component='img'
        src={logo}
        alt='HiggsMart'
        sx={{ width: 'auto', height: 25 }}
    />
);

export default HiggsmartLogo;
