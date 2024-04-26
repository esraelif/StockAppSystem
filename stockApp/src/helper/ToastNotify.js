import React from 'react';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ToastWarnNotify = msj => {
    toast.warm(msj, {
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnhover: true,
        draggable: true,
        progress: undefined,
    })
};
export const ToastSuccessNotify = msj => {
    toast.warm(msj, {
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnhover: true,
        draggable: true,
        progress: undefined,
    })
};
export const ToastErrorNotify = msj => {
    toast.warm(msj, {
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnhover: true,
        draggable: true,
        progress: undefined,
    })
};


