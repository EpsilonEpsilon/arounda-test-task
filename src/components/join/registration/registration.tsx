"use client"

import styles from "./registration.module.scss"
import {InputComponent} from "@/shared/ui/input";
import Link from "next/link";
import Routes from "@/lib/routes";
import {PrimaryButtonComponent} from "@/shared/ui/buttons";
import {InferType} from "yup"
import {registrationSchema} from "@/shared/schemas";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useCallback} from "react";

type AuthorizationType = InferType<typeof registrationSchema>


const Registration = ()=>{
    const {register,
        formState:{errors},
        handleSubmit} = useForm<AuthorizationType>({resolver:yupResolver(registrationSchema)});

    const onSubmit = (state:AuthorizationType) =>{
        console.log(state);
    }

    return(
        <div className={styles["container"]}>
            <header>
                <h1 className={styles["header"]}>Join Unsplash</h1>
                <p className={styles["subHeader"]}>Already have an account? <Link className={styles["link"]} href={Routes.Login}>Login</Link></p>
            </header>
            <form onSubmit={handleSubmit(onSubmit)} className={styles["form"]}>
                <div className={styles["userContainer"]}>
                    <InputComponent error={{message:errors["first_name"]?.message}} {...register("first_name")} label = "First Name"/>
                    <InputComponent error={{message:errors["last_name"]?.message}}  {...register("last_name")} label = "Last Name"/>
                </div>
                <InputComponent error={{message:errors["email"]?.message}}  {...register("email")} label = "Email"/>
                <InputComponent
                    error={{message:errors["username"]?.message}}
                    hint={"(only letters, numbers and underscores)"} label = "Username"/>
                <InputComponent
                    error={{message:errors["password"]?.message}}
                    {...register("password")}
                    hint={"(min. 8 char)"} label = "Password"/>

                <PrimaryButtonComponent type={"submit"}>Join</PrimaryButtonComponent>
            </form>
        </div>
    )
}

export default Registration;
