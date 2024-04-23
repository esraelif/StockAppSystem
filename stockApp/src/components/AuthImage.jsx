import { Container, Grid } from '@mui/material';
import React from 'react';

const AuthImage = () => {
    return (
        <Grid item xs={10} sm={7} md={6}>
            <Container>
                <img src="https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" style={{ width: "100%", marginTop: "130px", border: "5px solid indigo" }} />
            </Container>

        </Grid>
    );
}

export default AuthImage;
