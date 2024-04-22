import { Avatar, Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import AuthHeader from '../components/AuthHeader';
import AuthImage from "../components/AuthImage";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Container maxWidth="lg">
            <Grid
                container
                justifyContent="center"
                direction="row-reverse"
                sx={{
                    height: "100vh",
                    p: 2,
                }}
            >
                <AuthHeader />
                <Grid item xs={12} sm={10} md={6}>
                    <Avatar
                        sx={{
                            backgroundColor: "secondary.main",
                            m: "auto",
                            width: 40,
                            height: 40
                        }}>
                        <LockIcon size="30" />

                    </Avatar>
                    <Typography
                        variant='h4'
                        align='center'
                        mb={4}
                        color="secondary.main"
                    >SIGN IN</Typography>
                    <Box sx={{ textAlign: "center", mt: 2, color: "secondary.main" }}>
                        <Link to="/register">
                            Don't have an account? Sign Up
                        </Link>

                    </Box>

                </Grid>
                <AuthImage />
            </Grid>

        </Container>
    );
}

export default Login;
