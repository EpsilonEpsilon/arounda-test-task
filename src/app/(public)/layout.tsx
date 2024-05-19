import {HasChildren} from "@/types/global";
import React, {FC, ReactNode} from "react";
import {HeaderComponent} from "@/components/common";
import ModalSlot from "@/app/(public)/modal-slot";

interface IProps extends HasChildren{
    modal:ReactNode
}
const Layout:FC<IProps> = ({children, modal})=>{

    return (
        <>
            <HeaderComponent/>
            {children}
            <ModalSlot>
                {modal}
            </ModalSlot>
            <div id="modal-root" />
        </>
    )
}

export default Layout;
