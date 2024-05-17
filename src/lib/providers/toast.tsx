"use client"
import {FC} from "react";
import {Bounce, ToastContainer} from "react-toastify";
import {HasChildren} from "@/types/global";

interface IProps extends HasChildren{}





const ToastProvider:FC<IProps> = ({children})=>{
    return(
        <>
            {children}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition = {Bounce}
            />
        </>
    )
}

export default ToastProvider;
