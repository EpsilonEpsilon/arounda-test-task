import styles from "./spinner.module.scss"
import {FC} from "react";
import clsx from "clsx";

export enum SpinnerSize{
    small = "small",
}
interface IProps{
    size:SpinnerSize,
    className?:string
}
const Spinner:FC<IProps> = ({size, className})=>{
    return (
        <div className={clsx(className, styles["spinner"], styles[size])}/>
    )
}

export default Spinner;
