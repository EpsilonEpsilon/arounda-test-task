"use client"

import {Basic} from "unsplash-js/dist/methods/photos/types";
import {FC, useState} from "react";
import styles from "./stripes.module.scss"
import clsx from "clsx";
import {MasonryComponent} from "@/components/common";
import {notFound, useRouter} from "next/navigation";
import Routes from "@/lib/routes";

interface IProps{
    pictures:Basic[] | undefined;
}
const PictureStripes:FC<IProps> = ({pictures})=>{
    const router = useRouter();
    const [stripes, setStripes] = useState<3 | 5>(3);
    if(!pictures) return notFound();

    const handleClickImage = (pic:Basic)=>{
        router.push(Routes.Picture(pic.id));
    }
    return (
        <>
            <div className = {styles["buttonContainer"]}>
                <button onClick = {()=>setStripes(3)}
                        className={clsx(stripes === 3
                            && styles["selectedButton"],styles["button"])}
                >
                    3 stripes
                </button>
                <button onClick = {()=>setStripes(5)}
                        className={clsx(stripes === 5
                            && styles["selectedButton"],styles["button"])}
                >
                    5 stripes
                </button>
            </div>
            <MasonryComponent onImageClick={handleClickImage} columns={stripes} pictures={pictures}/>
        </>
    )
}

export default PictureStripes;
