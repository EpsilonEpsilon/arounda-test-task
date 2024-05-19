"use client"

import {FC} from "react";
import {HasChildren} from "@/types/global";
import Analytics from "@/lib/providers/analytics";
import ToastProvider from "@/lib/providers/toast";

interface IProps extends HasChildren{}


const Provider:FC<IProps> = ({children})=>{
    return (
        <>
            <Analytics>
                <ToastProvider>
                    {children}
                </ToastProvider>
            </Analytics>
        </>
    )
}


export default Provider;
