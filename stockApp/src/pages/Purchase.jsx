import React, { useEffect } from 'react';
import useStockCall from '../hooks/useStockCall';
const Purchase = () => {
    const { getFirms } = useStockCall()
    useEffect(() => {
        getFirms()
    }, [])
    return (
        <div>

        </div>
    );
}

export default Purchase;
