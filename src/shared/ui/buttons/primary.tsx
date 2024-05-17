import {forwardRef, HTMLProps} from "react";
import styles from "./primary.module.scss"
import clsx from "clsx";

interface IProps extends HTMLProps<HTMLButtonElement>{
    type: "submit" | "reset" | "button" | undefined
}
const PrimaryButton = forwardRef<HTMLButtonElement, IProps>((props, ref)=>{
    const {className, ...rest} = props;
    return (
        <button className={clsx(className, styles["button"])} {...rest} />
    )
})

PrimaryButton.displayName = "PrimaryButton"

export default PrimaryButton;
