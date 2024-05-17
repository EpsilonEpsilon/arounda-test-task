import {HasChildren} from "@/types/global";
import {FC} from "react";
import {HeaderComponent} from "@/components/common";

interface IProps extends HasChildren{}
const Layout:FC<IProps> = ({children})=>{
    return (
        <>
            <HeaderComponent/>
            {children}
        </>
    )
}

export default Layout;
