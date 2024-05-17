import styles from "./gallery.module.scss";
import {getPicturesList} from "@/lib/actions/pictures";
import {handleActionResponse} from "@/lib/response";
import {PictureStripesComponent} from "@/components/common";
import constants from "@/constants";
import {FC} from "react";
import {PaginationComponent} from "@/components/gallery";

interface IProps{
    page?:string
}
const Gallery:FC<IProps> = async ({page})=>{
    const pictures = handleActionResponse(
        await getPicturesList(parseInt(page || "1") || 1,
        constants.DEFAULT_IMAGES_PER_PAGE))
        .getData();
    return (
        <div className = {styles["container"]}>
            <div className = {styles["wrapper"]}>
                <PictureStripesComponent pictures={pictures}/>
                <PaginationComponent/>
            </div>
        </div>
    )
}

export default Gallery
