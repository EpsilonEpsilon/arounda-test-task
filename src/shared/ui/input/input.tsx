import styles from "./input.module.scss";
import {forwardRef, HTMLAttributes, HTMLProps, ReactNode} from "react";


interface IProps extends HTMLProps<Omit<HTMLInputElement, "label">>{
    error?:{message:string | undefined},
    hint?:string
}
const Input = forwardRef<HTMLInputElement, IProps>((props, ref)=>{
    const {label, hint, error, ...rest} = props;

    return (
        <div className={styles["container"]}>
            {label && <label className={styles["label"]}>{label}</label>}
            {hint && <span className={styles["labelDescription"]}>{hint}</span>}
            {label && <div className="small_spacer"/>}
            <input className={styles["input"]} ref = {ref} {...rest}/>
            {error && <span className={styles["error"]}>{error.message}</span>}
        </div>
    )
})

Input.displayName = "Input";

export default Input;
