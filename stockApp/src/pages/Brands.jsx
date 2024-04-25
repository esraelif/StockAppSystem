import React, { useEffect } from 'react';
import useStockCall from '../hooks/useStockCall';

const Brands = () => {
    const { getBrands } = useStockCall()

    useEffect(() => {
        getBrands()
    }, [])
    return (
        <div>
            brands
        </div>
    );
}

export default Brands;
