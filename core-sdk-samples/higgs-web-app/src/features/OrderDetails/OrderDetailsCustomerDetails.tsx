import React from 'react';
import { Grid, Typography, Box, FormControl, TextField } from '@mui/material';

const OrderDetailsCustomerDetails: React.FC = () => {
    return (
        <>
            <Grid
                item
                xs={12}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Typography variant='h6' sx={{ pb: 2 }}>
                    Shipping *
                </Typography>
                <Typography variant='caption'>* Demonstration Only</Typography>
                <FormControl fullWidth sx={{ my: 2 }}>
                    <TextField
                        id='streetAddress'
                        label='Street Address'
                        value='45 Broadwick Street'
                    />
                </FormControl>
                <FormControl fullWidth sx={{ my: 2 }}>
                    <TextField id='city' label='City' value='London' />
                </FormControl>
                <Box sx={{ my: 2 }}>
                    <FormControl sx={{ mr: 1 }}>
                        <TextField
                            id='county'
                            label='County'
                            value='Greater London'
                        />
                    </FormControl>
                    <FormControl sx={{ ml: 1 }}>
                        <TextField
                            id='postcode'
                            label='Postcode'
                            value='W1F 9QW'
                        />
                    </FormControl>
                </Box>
            </Grid>
            <Grid
                item
                xs={12}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Typography variant='h6' sx={{ pb: 2 }}>
                    Payment *
                </Typography>
                <Typography variant='caption'>* Demonstration Only</Typography>
                <FormControl fullWidth sx={{ my: 2 }}>
                    <TextField
                        id='cardNumber'
                        label='Credit Card Number'
                        value='1234-5678-9876-5432'
                    />
                </FormControl>
                <Box sx={{ my: 2 }}>
                    <FormControl sx={{ mr: 1 }}>
                        <TextField
                            id='expiration'
                            label='Expiration'
                            value='09/27'
                        />
                    </FormControl>
                    <FormControl sx={{ ml: 1 }}>
                        <TextField id='cvc' label='CVC' value='336' />
                    </FormControl>
                </Box>
            </Grid>
        </>
    );
};

export default OrderDetailsCustomerDetails;
