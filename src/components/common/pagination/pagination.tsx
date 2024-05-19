"use client"
import styles from "./pagination.module.scss"
import {FC} from "react";
import {getPageNumbers} from "@/shared/utils";

interface IProps{
    total:number,
    currentPage:number,
    handlePaginate:(page:number)=>Promise<void>
}
const Pagination:FC<IProps> = ({currentPage, total, handlePaginate})=>{
    const onChangePagination = async (page:number)=>{
        await handlePaginate(page);
        window.scrollTo({top:0})
    }
    return (
        <div className={styles["container"]}>
            {getPageNumbers(currentPage, total).map((page)=>(
                <button disabled={currentPage === page} onClick = {()=>onChangePagination(page)} key = {page} className={styles["button"]}>{page}</button>
            ))}
        </div>
    )
}

export default Pagination;
