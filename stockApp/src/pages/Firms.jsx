import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useStockCall from '../hooks/useStockCall';

const Firms = () => {
    const dispatch = useDispatch()
    const { token } = useSelector(state => state.auth)
    const { getStockData } = useStockCall()
    useEffect(() => {
        getStockData("firms")
    }, [])
    return (
        <div>
            Firms
        </div>
    );
}

export default Firms;
