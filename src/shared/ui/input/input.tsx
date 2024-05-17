import styles from "./input.module.scss";
import {forwardRef, HTMLAttributes, HTMLProps} from "react";
import clsx from "clsx";


interface IProps extends HTMLProps<HTMLInputElement>{
    error?:{message:string | undefined},
    hint?:string,
    label?:string
}
const Input = forwardRef<HTMLInputElement, IProps>((props, ref)=>{
    const {label, hint, error, ...rest} = props;

    return (
        <div className={styles["container"]}>
            {label && <label className={styles["label"]}>{label}</label>}
            {hint && <span className={styles["labelDescription"]}>{hint}</span>}
            {label && <div className="small_spacer"/>}
            <input className={clsx(styles["input"], !!error?.message && styles["inputError"])} ref = {ref} {...rest}/>
            {error && <span className={styles["error"]}>{error.message}</span>}
        </div>
    )
})

Input.displayName = "Input";

export default Input;
