import React, { useEffect } from 'react';
import useStockCall from '../hooks/useStockCall';
import { useDispatch, useSelector } from 'react-redux';

const Purchase = () => {
    const dispatch = useDispatch()
    const { token } = useSelector(state => state.auth)
    const { getStockData } = useStockCall()

    useEffect(() => {
        getStockData("firms")
    }, [])
    return (<div>purchase</div>)


}

export default Purchase;
