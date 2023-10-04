'use client'
import * as React from 'react';
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import LoginForm from '@/components/pages/Login/form';
import { Button, TextField } from '@mui/material';

export default function Login() {
    return (
        <Container
        sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'

        }}>
            <Box
            sx={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="#159911" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88a9.947 9.947 0 0 1 12.28 0C16.43 19.18 14.03 20 12 20z"/></svg>
            </Box>
           <Container
           component={'form'}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                
            }}>
                <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    sx={{
                        outlineColor: '#159911',
                        width: '100%',
                        maxWidth: '400px'
                    }}
                />
                <TextField
                    required
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    sx={{
                        outlineColor: '#159911',
                        width: '100%',
                        maxWidth: '400px'
                    }}
                />
                <Button
                    type="submit"
                    fullWidth
                    disabled={false}
                    sx={{ backgroundColor: '#159911',
                    width: '100%',
                    maxWidth: '400px'
                    }}
                    variant='contained'
                >
                    ورود
                </Button>
           </Container>
               
            

        </Container>
    )
}