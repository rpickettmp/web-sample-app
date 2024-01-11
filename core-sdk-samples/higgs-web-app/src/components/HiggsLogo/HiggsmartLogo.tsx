import { Box } from '@mui/material';
// import logo from '../../assets/images/higgsmart-logo.svg';
import logo from 'https://remotion.se/wp-content/uploads/2023/03/Remotion_Logo_Off-White.svg';

const HiggsmartLogo = () => (
    <Box
        component='img'
        src={logo}
        alt='HiggsMart'
        sx={{ width: 'auto', height: 25 }}
    />
);

export default HiggsmartLogo;
