import {SpinnerSize, SpinnerType} from "@/shared/ui/spinner/spinner";
import {Spinner} from "@/shared/ui/spinner";
import styles from "./loader.module.scss";
const Loader = ()=>{
    return (
        <div className={styles["container"]}>
            <Spinner type={SpinnerType.filled} size={SpinnerSize.big}/>
        </div>
    )
}

export default Loader;
