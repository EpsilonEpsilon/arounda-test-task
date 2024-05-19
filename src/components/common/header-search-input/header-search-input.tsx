"use client"
import {KeyboardEvent, useEffect} from "react"
import {SearchInputComponent} from "@/shared/ui/search-input";
import styles from "./search.module.scss";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useState} from "react";
import Routes from "@/lib/routes";

const HeaderSearchInput = ()=>{
    const router = useRouter();
    const params = useSearchParams();
    const [value, setValue] = useState(params.get("query") || "");


    useEffect(()=>{
        setValue(params.get("query") || "")
    },[params])
    const handleKeyDown = (e:KeyboardEvent)=>{
        if(e.code !== "Enter" || !value) return;

        const urlSearchParams = new URLSearchParams();
        urlSearchParams.set("query", value);
        const queryString = urlSearchParams.toString();
        const updatedPath = queryString ? `${Routes.Search}?${queryString}` : Routes.Search;

        router.push(updatedPath);
    }
    return(
        <SearchInputComponent inputProps={{
            value:value,
            onChange:(e:any) => setValue(e.target.value),
            onKeyDown:handleKeyDown,
        }} className={styles["search"]}/>
    )
}
export default HeaderSearchInput;
