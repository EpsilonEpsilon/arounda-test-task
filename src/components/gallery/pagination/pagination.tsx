"use client"
import styles from "./pagination.module.scss"
import {usePathname, useRouter, useSearchParams} from "next/navigation";
const Pagination = ()=>{
    const pathname = usePathname();
    const router = useRouter();
    const params = useSearchParams();
    const handleNextPage = ()=>{
        const stringPage = params.get("page") || "0";
        const parsedPage = parseInt(stringPage);

        let page = 2;
        if(parsedPage) page = parsedPage + 1;

        const urlSearchParams = new URLSearchParams();
        urlSearchParams.set("page", page.toString());
        const queryString = urlSearchParams.toString();
        const updatedPath = queryString ? `${pathname}?${queryString}` : pathname;

        router.push(updatedPath);
    }

    const handlePrevPage = ()=>{
        const stringPage = params.get("page") || "0";
        if(!stringPage) return;
        const parsedPage = parseInt(stringPage);
        if(parsedPage === 0 || parsedPage === 1) return;

        let page = parsedPage;
        if(parsedPage) page = parsedPage - 1;
        const urlSearchParams = new URLSearchParams();
        urlSearchParams.set("page", page.toString());
        const queryString = urlSearchParams.toString();
        const updatedPath = queryString ? `${pathname}?${queryString}` : pathname;
        router.push(updatedPath);
    }
    return (
        <div className={styles["container"]}>
            <button disabled={!params.get("page") || params.get("page") === "1"} onClick={handlePrevPage} className={styles["button"]}>Prev Page</button>
            <button onClick={handleNextPage} className={styles["button"]}>Next Page</button>
        </div>
    )
}

export default Pagination;
