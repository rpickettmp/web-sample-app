import { Box } from '@mui/material';
// import logo from '../../assets/images/Dev-Higgs.svg';
// import logo from 'https://www.transa.ch/e8244f7dbcc1ab027f995700b8db7846d113a5d5/assets/base/frontend-core/staticImages/transa-logo.svg';
import logo from '../../assets/images/Remotion_Logo_Off-White.svg';

const HiggsLogo = () => (
    <Box
        component='img'
        alt='Higgs Logo'
        // src='https://www.transa.ch/e8244f7dbcc1ab027f995700b8db7846d113a5d5/assets/base/frontend-core/staticImages/transa-logo.svg'
        src={logo}
        sx={{ width: '100%', height: 'auto' }}
    />
);

export default HiggsLogo;
