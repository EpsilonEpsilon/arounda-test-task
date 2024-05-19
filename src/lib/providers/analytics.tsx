"use client"
import {HasChildren} from "@/types/global";
import {FC} from "react";
import { Analytics as Provider } from "@vercel/analytics/react"
interface IProps extends HasChildren{}
const Analytics:FC<IProps> = ({children})=>{
    return (
        <>
            {children}
            <Provider mode={"production"}/>
        </>

    )
}

export default Analytics
