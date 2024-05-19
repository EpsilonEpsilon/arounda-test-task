import styles from "./spinner.module.scss"
import {FC} from "react";
import clsx from "clsx";

export enum SpinnerSize{
    small = "small",
    big = "big"
}

export enum SpinnerType{
    transparent = "transparent",
    filled = "filled"
}
interface IProps{
    size:SpinnerSize,
    type?:SpinnerType
    className?:string
}
const Spinner:FC<IProps> = ({size, className, type})=>{
    return (
        <div className={clsx(className, styles["spinner"], styles[size], type && styles[type || SpinnerType.transparent])}/>
    )
}

export default Spinner;
