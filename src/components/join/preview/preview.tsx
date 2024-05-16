import styles from "./preview.module.scss"
import preview from "../../../../public/assets/images/login-preview.avif"
import blurredPreview from "../../../../public/assets/images/login-preview-blurred.bmp"
import Image from "next/image";
const Preview = ()=>{
    return (
        <div className={styles["container"]}>
            <div className={styles["imageContainer"]}>
                <Image loading={"eager"}
                       placeholder="blur"
                       blurDataURL={blurredPreview.blurDataURL}
                       className={styles["image"]}
                       src={preview} alt={"preview-login"}/>
            </div>
            <div className={styles["contentContainer"]}>
                <h2 className={styles["title"]}>Creation starts here</h2>
                <p className={styles["subTitle"]}>Access 5,825,610 free, high-resolution photos you can’t find anywhere else.</p>
            </div>
        </div>
    )
}

export default Preview;

