"use client"

import {HasChildren} from "@/types/global";
import React, {FC, ReactNode} from "react";
import {HeaderComponent} from "@/components/common";
import {usePathname} from "next/navigation";

interface IProps extends HasChildren{
    modal:ReactNode
}
const Layout:FC<IProps> = ({children, modal})=>{
    const pathname = usePathname();
    const shouldShowModal = pathname.includes("/picture/");
    return (
        <>
            <HeaderComponent/>
            {children}
            {shouldShowModal && modal}
            <div id="modal-root" />
        </>
    )
}

export default Layout;
