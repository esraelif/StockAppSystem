import { useDispatch, useSelector } from 'react-redux';
import { fetchFail, fetchStart, getSuccess } from '../features/StockSlice';
import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL



const useStockCall = () => {
    const dispatch = useDispatch()
    const { token } = useSelector(state => state.auth)


    // const getFirms = async () => {
    //     dispatch(fetchStart())
    //     try {
    //         const { data } = await axios(`${BASE_URL}firms`, {
    //             headers: {
    //                 Authorization: `Token ${token}`
    //             }
    //         })
    //         console.log(data)
    //         // dispatch(firmsSuccess(data.data))
    //         dispatch(getSuccess({ data: data.data, url: "firms" }))
    //     } catch (error) {
    //         console.log(error);
    //         dispatch(fetchFail())
    //     }
    // }

    // const getBrands = async () => {
    //     dispatch(fetchStart())
    //     try {
    //         const { data } = await axios(`${BASE_URL}brands`, {
    //             headers: {
    //                 Authorization: `Token ${token}`

    //             }
    //         })
    //         console.log(data)
    //         // dispatch(brandSuccess(data.data))
    //         dispatch(getSuccess({ data: data.data, url: "brands" }))
    //     } catch (error) {
    //         console.log(error);
    //         dispatch(fetchFail())
    //     }
    // }

    const getStockData = async (url) => {
        dispatch(fetchStart())
        try {
            const { data } = await axios(`${BASE_URL}${url}`, {
                headers: {
                    Authorization: `Token ${token}`

                }
            })
            console.log(data)
            // dispatch(brandSuccess(data.data))
            dispatch(getSuccess({ data: data.data, url: url }))
        } catch (error) {
            console.log(error);
            dispatch(fetchFail())
        }
    }


    return { getStockData }
}

const deleteStockData = async (url, id) => {
    dispatch(fetchStart())
    try {
        await axios.delete(`${BASE_URL}${url}/${id}`, {
            headers: {
                Authorization: `Token ${token}`
            }
        })


    } catch (error) {
        console.log(error);
        dispatch(fetchFail())
    } finally {
        getStockData(url)
    }




    return { deleteStockData }
}

export default useStockCall;
