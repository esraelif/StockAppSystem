import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useStockCall from '../hooks/useStockCall';
import { Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import FirmCard from '../components/Cards/FirmCard';


const Firms = () => {
    // const dispatch = useDispatch()
    // const { token } = useSelector(state => state.auth)
    const { getStockData } = useStockCall()
    const { firms } = useSelector((state) => state.stock)
    console.log(firms)
    useEffect(() => {
        getStockData("firms")
    }, [])
    return <Container>
        <Typography
            align='center'
            variant='h4'
            component='h1'
            color="secondary.second"
        >
            Our Contracted Firms

        </Typography>
        <Button
            variant='contained'
        >
            New Firm
        </Button>

        <Grid container spacing={2}>
            {firms.map((firm) => (
                <Grid items xs={12} md={6} lg={4} xl={3} key={firm._id}>
                    <FirmCard {...firm} />
                </Grid>
            ))}
        </Grid>

    </Container>


}

export default Firms;
