import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useStockCall from '../hooks/useStockCall';
import { Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';



import FirmCard from '../components/Cards/FirmCard';
import FirmModal from '../components/Modals/FirmModal';




const Firms = () => {
    // const dispatch = useDispatch()
    // const { token } = useSelector(state => state.auth)
    const { getStockData } = useStockCall()
    const { firms } = useSelector((state) => state.stock)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setInitialState({
            name: "",
            phone: "",
            address: "",
            image: "",



        })
    }
    const [initialState, setInitialState] = useState({
        name: "",
        phone: "",
        address: "",
        image: "",
    })
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
            onClick={handleOpen}
        >
            New Firm
        </Button>

        <Grid container spacing={2} mt={3}>
            {firms.map((firm) => (
                <Grid item xs={12} md={6} lg={4} xl={3} key={firm._id}>
                    <FirmCard {...firm} handleOpen={handleOpen} setInitialState={setInitialState} />
                </Grid>
            ))}
        </Grid>
        <FirmModal open={open} handleClose={handleClose} initialState={initialState} />

    </Container>


}

export default Firms;
