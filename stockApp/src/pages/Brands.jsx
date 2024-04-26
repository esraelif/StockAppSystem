import React, { useEffect } from 'react';
import useStockCall from '../hooks/useStockCall';

const Brands = () => {
    const { getStockData } = useStockCall()

    useEffect(() => {
        getStockData("brands")
    }, [])
    return (
        <div>
            brands
        </div>
    );
}

export default Brands;
