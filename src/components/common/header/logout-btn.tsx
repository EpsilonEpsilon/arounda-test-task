"use client"
import styles from "./header.module.scss";
import {FC} from "react";
import {removeServersideCookie} from "@/shared/utils";


interface IProps{

}
const LogoutButton:FC<IProps> = ({})=>{
    const handleClick = async ()=>{
        await  removeServersideCookie("token");
        location.reload();
    }
    return <button onClick={handleClick} className={styles["button"]}>Logout</button>
}


export default LogoutButton;
