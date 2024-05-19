"use client"

import {usePathname} from "next/navigation";
import {FC} from "react";
import {HasChildren} from "@/types/global";

interface IProps extends HasChildren{

}
const ModalSlot:FC<IProps> = ({children})=>{
    const pathname = usePathname();
    const shouldShowModal = pathname.includes("/picture/");

    return shouldShowModal ? <>
        {children}
    </> : null;
}

export default ModalSlot;
