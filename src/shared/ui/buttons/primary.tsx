import {forwardRef, HTMLProps} from "react";
import styles from "./primary.module.scss"

interface IProps extends HTMLProps<HTMLButtonElement>{
    type: "submit" | "reset" | "button" | undefined
}
const PrimaryButton = forwardRef<HTMLButtonElement, IProps>((props, ref)=>{
    const {className, ...rest} = props;
    return (
        <button className={`${className} ${styles["button"]}`} {...rest} />
    )
})


export default PrimaryButton;
