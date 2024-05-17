"use client"

import styles from "./masonry.module.scss";
import {Basic} from "unsplash-js/dist/methods/photos/types";
import {FC, ReactNode} from "react";
import clsx from "clsx";
import Image from "next/image";
import createPattern from "@/lib/masonry";
import {blurHashToDataURL} from "@/shared/utils/createBlurDataUrl";
import {splitArrayHelper} from "@/shared/utils";
import useMediaQuery from "@/hooks/useMediaQuery";



interface IProps{
    pictures:Basic[],
    columns:3 | 5,
}
const oddPattern = ["l", "p", "l"];
const evenPattern = ["p", "l", "p"];
const Masonry:FC<IProps> = ({pictures, columns})=>{
    const splitArray = splitArrayHelper(pictures, columns);
    const matches950 = useMediaQuery("(max-width:950px)");
    const matches750 = useMediaQuery("(max-width:750px)");
    const matches450 = useMediaQuery("(max-width:450px)");
    const getResponsiveColumnsCount = ()=>{
        if(matches450) return 1;
        if(matches750) return 2;
        if(matches950) return 3;
        return columns;
    }

    const getImageQuality = ()=>{
        if(matches950) return "small";
        return "regular";
    }
    return (
        <>
            <Layout columns={getResponsiveColumnsCount()}>
                {Array.from(new Array(getResponsiveColumnsCount()).keys()).map((index)=>(
                    <Item quality={getImageQuality()} key = {index} pictures={createPattern(splitArray[index], (index % 2 ? evenPattern : oddPattern) as ["l", "p"])}/>
                ))}
            </Layout>
        </>

    )
}


interface ILayoutProps{
    children:ReactNode,
    columns:number
}
const Layout:FC<ILayoutProps> = ({children, columns})=>{
    return(
        <div style={{gridTemplateColumns:`repeat(${columns}, minmax(0, 1fr))`}}
             className={clsx(styles["container"], styles["grid_count_3"])}
        >
            {children}
        </div>
    )
}


interface IItem{
    pictures:Basic[],
    quality:"regular" | "small",
}
const Item:FC<IItem> = ({pictures, quality})=>{
    return (
        <div>
            <div className={styles["item"]}>
                {pictures.map((pic)=>(
                    <Image
                        priority
                        placeholder="blur"
                        blurDataURL={blurHashToDataURL(pic.blur_hash!)}
                        key = {pic.id}
                        width={pic.width}
                        height={pic.height}
                        style={{aspectRatio:`${pic.width} / ${pic.height}`}}
                        className={styles["img"]}
                        src={pic.urls[quality]}
                        alt={pic.description || ""}
                    />
                ))}
            </div>
        </div>
    )
}



export default Masonry;
