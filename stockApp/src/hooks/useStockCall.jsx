import { useDispatch, useSelector } from 'react-redux';
import { brandSuccess, fetchFail, fetchStart, firmsSuccess } from '../features/StockSlice';
import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL



const useStockCall = () => {
    const dispatch = useDispatch()
    const { token } = useSelector(state => state.auth)


    const getFirms = async () => {
        dispatch(fetchStart())
        try {
            const { data } = await axios(`${BASE_URL}firms`, {
                headers: {
                    Authorization: `Token ${token}`

                }
            })
            console.log(data)
            dispatch(firmsSuccess(data.data))
        } catch (error) {
            console.log(error);
            dispatch(fetchFail())
        }
    }

    const getBrands = async () => {
        dispatch(fetchStart())
        try {
            const { data } = await axios(`${BASE_URL}brands`, {
                headers: {
                    Authorization: `Token ${token}`

                }
            })
            console.log(data)
            dispatch(brandSuccess(data.data))
        } catch (error) {
            console.log(error);
            dispatch(fetchFail())
        }
    }

    return { getFirms, getBrands }
}

export default useStockCall;
