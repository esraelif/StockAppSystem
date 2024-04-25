import React, { useEffect } from 'react';
import useStockCall from '../hooks/useStockCall';
import { useDispatch, useSelector } from 'react-redux';

const Purchase = () => {
    const dispatch = useDispatch()
    const { token } = useSelector(state => state.auth)
    const { getFirms } = useStockCall()

    useEffect(() => {
        getFirms()
    }, [])
    return (<div>purchase</div>)


}

export default Purchase;
