import {PreviewComponent, RegistrationComponent} from "@/components/join";
import styles from "./join.module.scss";
const Join = ()=>{
    return (
        <div className={styles["container"]}>
            <PreviewComponent/>
            <RegistrationComponent/>
        </div>
    )
}

export default Join;
