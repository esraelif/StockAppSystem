// import { AppBar, Box, Button, CssBaseline, Toolbar, Typography } from '@mui/material';
// import React from 'react';
// import useAuthCall from '../hooks/useAuthCall';
// import { Outlet } from 'react-router-dom';
// import LogoutIcon from '@mui/icons-material/Logout';
// import WidgetsIcon from '@mui/icons-material/Widgets';

// const Dashboard = () => {
//     const { logout } = useAuthCall()
//     return (
//         <Box sx={{ display: "flex" }}>
//             <CssBaseline />
//             <AppBar position='fixed'>
//                 <Toolbar>
//                     <Typography variant='h6' component="div" sx={{ flexGrow: 1 }}>
//                         <WidgetsIcon /> Stock App
//                     </Typography>
//                     <Button color="inherit" onClick={logout}><LogoutIcon /> LogOut </Button>
//                 </Toolbar>

//             </AppBar>
//             <div style={{ marginTop: "10rem" }}>
//                 <Outlet />
//             </div>


//         </Box >
//     );
// }

// export default Dashboard;
import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Outlet } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import WidgetsIcon from '@mui/icons-material/Widgets';
import useAuthCall from '../hooks/useAuthCall';
import { Button } from '@mui/material';
import MenuListItems from '../components/MenuListItems';

const drawerWidth = 240;

function Dashboard(props) {
    const { logout } = useAuthCall()
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };



    // Remove this const when copying and pasting into your project.
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    background: "white",
                    color: "secondary.main",
                    borderRadius: "0.5rem"
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                        <WidgetsIcon /> Stock App
                    </Typography>
                    <Button color="inherit" onClick={logout} sx={{ "&:hover": { backgroundColor: "secondary.main", color: "white" } }}><LogoutIcon sx={{ mr: "0.5rem" }} /> LogOut </Button>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    <MenuListItems />
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    <MenuListItems />
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Outlet />
            </Box>
        </Box>
    );
}

// ResponsiveDrawer.propTypes = {
//     /**
//      * Injected by the documentation to work in an iframe.
//      * Remove this when copying and pasting into your project.
//      */
//     window: PropTypes.func,
// };

export default Dashboard;
