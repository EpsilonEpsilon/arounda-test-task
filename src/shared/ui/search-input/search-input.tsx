"use client"

import {FC, ComponentProps, HTMLProps} from "react"
import styles from "./search.module.scss";
import Image from "next/image";
import search from "@/../public/assets/svg/search.svg";
import clsx from "clsx";


interface IProps extends ComponentProps<"input">{
    inputProps?:HTMLProps<HTMLInputElement>
}
const SearchInput:FC<IProps> = (props)=>{
    const {className, inputProps, ...rest} = props;

    return(
        <div {...rest} className={clsx(styles["container"], className)}>
            <Image priority className={styles["searchIcon"]} src={search} alt={"search"}/>
            <input
                {...inputProps}
               placeholder="Search hight-resolution images"
               className={styles["input"]}
               type = "text"/>
        </div>
    )
}

export default SearchInput;
