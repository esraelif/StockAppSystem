import { AppBar, Box, Button, CssBaseline, Toolbar, Typography } from '@mui/material';
import React from 'react';

const Dashboard = () => {
    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar position='fixed'>
                <Toolbar>
                    <Typography variant='h6' component="div" sx={{ flexGrow: 1 }}>
                        Stock App
                    </Typography>
                    <Button color="inherit"> LogOut </Button>
                </Toolbar>

            </AppBar>

        </Box >
    );
}

export default Dashboard;
