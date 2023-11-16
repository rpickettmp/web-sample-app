import { Box } from '@mui/material';
// import logo from '../../assets/images/higgsmart-logo.svg';
import logo from 'https://www.monsoon.co.uk/on/demandware.static/-/Library-Sites-monsoon-content-global/default/dwe907f9ba/global/monsoon-logo-white-3.png';

const HiggsmartLogo = () => (
    <Box
        component='img'
        src={logo}
        alt='HiggsMart'
        sx={{ width: 'auto', height: 60 }}
    />
);

export default HiggsmartLogo;
