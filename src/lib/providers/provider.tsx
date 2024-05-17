"use client"

import {FC} from "react";
import {HasChildren} from "@/types/global";
import ToastProvider from "@/lib/providers/toast";

interface IProps extends HasChildren{}


const Provider:FC<IProps> = ({children})=>{
    return (
        <>
            <ToastProvider>
                {children}
            </ToastProvider>
        </>
    )
}


export default Provider;
