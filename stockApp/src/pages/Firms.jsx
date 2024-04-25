import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useStockCall from '../hooks/useStockCall';

const Firms = () => {
    const dispatch = useDispatch()
    const { token } = useSelector(state => state.auth)
    const { getFirms } = useStockCall()
    useEffect(() => {
        getFirms()
    }, [])
    return (
        <div>
            Firms
        </div>
    );
}

export default Firms;
