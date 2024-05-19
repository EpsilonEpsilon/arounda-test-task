import {PictureStripesComponent} from "@/components/common";
import {Basic} from "unsplash-js/dist/methods/photos/types";
import {FC} from "react";
import styles from "./content.module.scss";

interface IProps{
    pictures:Basic[] | undefined
}
const GalleryContent:FC<IProps> = ({pictures})=>{
    return (
        <div className = {styles["container"]}>
            <div className = {styles["wrapper"]}>
                <PictureStripesComponent pictures={pictures}/>
            </div>
        </div>
    )
}



export default GalleryContent;
