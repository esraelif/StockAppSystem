import axios from "axios";
import { useDispatch } from 'react-redux';
import { fetchStart } from "../features/authSlice";

export const register = async (userInfo) => {
    const dispatch = useDispatch()
    dispatch(fetchStart())
    try {

    } catch (error) {

    }
}