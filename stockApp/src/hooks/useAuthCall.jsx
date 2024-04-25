import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    fetchFail, fetchStart, registerSuccess, loginSuccess,
    logoutSuccess,
} from '../features/authSlice'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastErrorNotify, ToastSuccessNotify } from "../helper/ToastNotify";
const BASE_URL = import.meta.env.VITE_BASE_URL;
const useAuthCall = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { token } = useSelector((store) => store.auth);


    const register = async (userInfo) => {
        dispatch(fetchStart())
        try {
            const { data } = await axios.post(`${BASE_URL}users/`, userInfo)
            console.log(data)
            dispatch(registerSuccess(data))
            navigate("/stock")

        } catch (error) {
            dispatch(fetchFail())
            console.log(error)
        }
    }
    const login = async (userInfo) => {
        dispatch(fetchStart());
        try {
            const { data } = await axios.post(`${BASE_URL}auth/login/`, userInfo);
            dispatch(loginSuccess(data))
            ToastSuccessNotify("Login performed")
            navigate("/stock");

        } catch (error) {
            dispatch(fetchFail())
            ToastErrorNotify("Login can not be performed")

        }
    }
    const logout = async () => {
        dispatch(fetchStart())
        try {
            await axios.get(`${BASE_URL}auth/logout/`, {
                header: {
                    Authorization: `Token ${token}`,
                },
            });
            dispatch(logoutSuccess())
            ToastSuccessNotify("Log out performed")
            navigate("/")

        } catch (error) {
            dispatch(fetchFail())
            ToastErrorNotify("Logout can not be performed")

        }
    }

    return { register, login, logout }
}

export default useAuthCall



// https://react.dev/learn/reusing-logic-with-custom-hooks

//! Birden fazla componentte aynı fonksiyona veya fonksiyonlara ihtiyacım varsa (fetch gibi) ve bu fonksiyonlar içerisinde hooklara ihtiyaç duyuyorsam dispatch,state gibi o zaman custom hook yazmak mantıklıdır.
//* custom hooklar "use" kelimesiyle başlar.
//+ custom hooklar jsx return etmez.
//* custom hookslar parametre alabilirler.
//? birden fazla değer veya fonksiyon paylaşabiliriz. Eğer tek bir değer veya fonskiyon paylaşacaksak return deger dememiz yeterli. Ama birden fazlaysa o zaman object içerisinde değerlerimi, fonksiyonlarımı paylaşabilirim.
//? Tek değer paylaştığımızda kullancağımız componentte direk olarka çağırabiliriz. Ama birden fazla değer paylaşıyorsak kullanırken destructuring yapmalıyız.



