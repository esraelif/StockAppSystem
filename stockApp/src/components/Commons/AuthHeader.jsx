import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
const AuthHeader = () => {
    return (
        <Grid item xs={12} mb={3}>
            <Typography variant="h2" color="#194a7a" fontSize="bold" align="center" marginTop="45px">
                Stock Management System
            </Typography>
        </Grid>
    );
};

export default AuthHeader;
