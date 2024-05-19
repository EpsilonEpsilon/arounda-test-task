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
import Link from "next/link";
import Routes from "@/lib/routes";



interface IProps{
    pictures:Basic[],
    columns:3 | 5,
    onImageClick?:(pic:Basic)=>void,
}
const oddPattern = ["l", "p", "l"];
const evenPattern = ["p", "l", "p"];
const Masonry:FC<IProps> = ({pictures, columns, onImageClick})=>{
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
                    <Item onImageClick={onImageClick} quality={getImageQuality()} key = {index} pictures={createPattern(splitArray[index], (index % 2 ? evenPattern : oddPattern) as ["l", "p"])}/>
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
    onImageClick?:(pic:Basic)=>void,
}
const Item:FC<IItem> = ({pictures, quality, onImageClick})=>{

    return (
        <div className={styles["item"]}>
            {pictures.map((pic)=>(
                <Link key = {pic.id} scroll={false} href={Routes.Picture(pic.id)} passHref>
                    <Image
                        // onClick={()=>onImageClick && onImageClick(pic)}
                        priority
                        placeholder={pic.blur_hash! ? "blur" : "empty"}
                        blurDataURL={blurHashToDataURL(pic.blur_hash!)}
                        width={pic.width}
                        height={pic.height}
                        style={{aspectRatio:`${pic.width} / ${pic.height}`}}
                        className={styles["img"]}
                        src={pic.urls[quality]}
                        alt={pic.description || ""}
                    />
                </Link>
            ))}
        </div>
    )
}



export default Masonry;
