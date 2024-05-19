import {FC, Suspense} from "react";
import Image from "next/image";
import {handleActionResponse} from "@/lib/response";
import {getPictureById} from "@/lib/actions/picture";
import styles from "./picture.module.scss"
import blurHashToDataURL from "@/shared/utils/createBlurDataUrl";
import clsx from "clsx";
import Link from "next/link";
import Routes from "@/lib/routes";

interface IProps{
    id:string,
    isModal:boolean
}
const Picture:FC<IProps> = async ({id, isModal})=>{
    const pic = handleActionResponse(await getPictureById(id))
        .getData();

    if(!pic) return (
            <div>No Image Information</div>
    )
    return (
        <Suspense>
            <div className={styles["container"]}>
                <div className={styles["wrapper"]}>
                    <div className={styles["imageLayout"]}>
                        <Image
                            priority
                            placeholder={pic.blur_hash! ? "blur" : "empty"}
                            blurDataURL={blurHashToDataURL(pic.blur_hash!)}
                            key = {pic.id}
                            width={pic.width}
                            height={pic.height}
                            style={{aspectRatio:`${pic.width} / ${pic.height}`}}
                            className={clsx(styles["img"], isModal && styles["modal_img"])}
                            src={pic.urls.regular}
                            alt={pic.description || ""}
                        />
                    </div>
                    <div className = {styles["content"]}>
                        <div className={styles["contentItem"]}>
                            <p className={styles["label"]}>Like</p>
                            <p className = {styles["contentValue"]}>{pic.likes}</p>
                        </div>
                        <div className={styles["contentItem"]}>
                            <p className={styles["label"]}>Downloads</p>
                            <p className = {styles["contentValue"]}>{pic.downloads}</p>
                        </div>
                        <div className={styles["contentItem"]}>
                            <p className={styles["label"]}>Width</p>
                            <p className = {styles["contentValue"]}>{pic.width}</p>
                        </div>
                        <div className={styles["contentItem"]}>
                            <p className={styles["label"]}>Height</p>
                            <p className = {styles["contentValue"]}>{pic.height}</p>
                        </div>
                    </div>
                    <div className={styles["tags"]}>
                        {pic.tags.map((tag)=>(
                            <Link href={`${Routes.Search}?query=${tag.title}`} className={styles["tag"]}>{tag.title}</Link>
                        ))}
                    </div>
                </div>
            </div>
        </Suspense>
    )
}

export default Picture;
