// TS incorrectly flags function declarations as unused variables
/* eslint-disable no-unused-vars */
import {
    Button,
    FormControl,
    Grid,
    TextField,
    Typography,
    InputAdornment,
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import React, { useState } from 'react';

interface LoginViewProps {
    loginAction(myemail: string): void;
}
const LoginView: React.FC<LoginViewProps> = ({ loginAction }) => {
    // Hardcoding user ID for demonstration purposes
    // const userId = 'MyHiggsId';
    const [email, setEmail] = React.useState('demo0927@mailinator.com');
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setEmail(event.target.value);
    };

    return (
        <>
            <Grid
                item
                sx={{
                    mb: 2,
                }}
            >
                <FormControl>
                    {
                        // <TextField id='userId' label='User Id' value={userId} />
                    }
                    <TextField
                        id='email'
                        fullWidth
                        label='Email: '
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                        value={email}
                        onChange={handleChange}
                        sx={{
                            width: '36ch',
                            maxWidth: '36ch',
                        }}
                    />
                </FormControl>
            </Grid>
            <Grid item>
                <Button
                    variant='contained'
                    fullWidth
                    size='large'
                    onClick={() => loginAction(email)}
                >
                    Sign In *
                </Button>
            </Grid>
            <Grid item>
                <Typography variant='caption'>* Demonstration Only</Typography>
            </Grid>
        </>
    );
};

export default LoginView;
