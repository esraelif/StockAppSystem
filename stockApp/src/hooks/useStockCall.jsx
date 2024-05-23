import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
   
    fetchFail,
    fetchStart,
    getProCatBrandSuccess,
    getProPurcFirBrandsSuccess,
    getProSalBrandsSuccess,
    getPurcSalesSuccess,
 
    getSuccess,
} from "../features/StockSlice";
import useAxios from "./useAxios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const useStockCall = () => {
    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.auth);
    const axiosWithToken = useAxios()
    const getStockData = async (url) => {
        dispatch(fetchStart());
        try {
     
            const { data } = await axiosWithToken(`${url}`);
            console.log(data);
            
            dispatch(getSuccess({ data: data.data, url })); //* action creatorlar her zaman tek bir parametre kabul ederler
        } catch (error) {
            console.log(error);
            dispatch(fetchFail());
        }
    };
   
    const deleteStockData = async (url, id) => {
        dispatch(fetchStart());
        try {
    
            await axiosWithToken.delete(`${url}/${id}`);
           
            toastSuccessNotify("Operation succes");
        } catch (error) {
            console.log(error);
            dispatch(fetchFail());
            toastErrorNotify(error?.response?.data?.message || "Operation not success")
        } finally {
            getStockData(url);
        }
    };

    const postStockData = async (url, info) => {
        dispatch(fetchStart());
        try {
            await axiosWithToken.post(`${url}`, info);
         
            toastSuccessNotify("Operation succes");
        } catch (error) {
            console.log(error);
            dispatch(fetchFail());
            toastErrorNotify(error?.response?.data?.message || "Operation not success")
        } finally {
            getStockData(url);
        }
    };
    const putStockData = async (url, info) => {
        dispatch(fetchStart());
        try {
            await axiosWithToken.put(`${url}/${info._id}`, info);
            
            toastSuccessNotify("Operation succes");
        } catch (error) {
            console.log(error);
            dispatch(fetchFail());
            toastErrorNotify(error?.response?.data?.message || "Operation not success")
        } finally {
            getStockData(url);
        }
    };

    //!Promise.all()
  
    const getProCatBrand = async () => {
        dispatch(fetchStart());
        try {
            // const [a,b] = [1,2] // array destructuring
            const [products, categories, brands] = await Promise.all([
                axiosWithToken("products"),
                axiosWithToken("categories"),
                axiosWithToken("brands"),
            ])
            dispatch(getProCatBrandSuccess([products?.data?.data, categories?.data?.data, brands?.data?.data]))
        } catch (error) {
            dispatch(fetchFail());
        }
    }
    const getProSalBrands = async () => {
        dispatch(fetchStart());
        try {
          
            const [products, brands, sales] = await Promise.all([
                axiosWithToken.get(`products/`),
                axiosWithToken.get(`brands/`),
                axiosWithToken.get(`sales/`),
            ]);

            dispatch(
                getProSalBrandsSuccess([products?.data, brands?.data, sales?.data])
            );
        } catch (error) {
            dispatch(fetchFail());
        }
    };
    const getProPurcFirBrands = async () => {
        dispatch(fetchStart());
        try {
          
            const [products, purchases, firms, brands] = await Promise.all([
                axiosWithToken.get(`products/`),
                axiosWithToken.get(`purchases/`),
                axiosWithToken.get(`firms/`),
                axiosWithToken.get(`brands/`),
            ]);

            dispatch(
                getProPurcFirBrandsSuccess([
                    products?.data,
                    purchases?.data,
                    firms?.data,
                    brands?.data,
                ])
            );
        } catch (error) {
            dispatch(fetchFail());
        }
    };
    const getPurcSales = async () => {
        dispatch(fetchStart());
        try {
            const [sales, purchases] = await Promise.all([
                axiosWithToken.get(`sales/`),
                axiosWithToken.get(`purchases/`),
            ]);

            dispatch(
                getPurcSalesSuccess([
                    sales?.data,
                    purchases?.data
                ])
            );
        } catch (error) {
            dispatch(fetchFail());
        }
    };
    return {
       
        deleteStockData,
        putStockData,
        postStockData,
        getStockData,
        getProCatBrand,
        getProSalBrands,
        getProPurcFirBrands,
        getPurcSales
    };
};

export default useStockCall;


