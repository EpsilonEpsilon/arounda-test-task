"use client"

import styles from "./login.module.scss";
import {InputComponent} from "@/shared/ui/input";
import {PrimaryButtonComponent} from "@/shared/ui/buttons";
import Link from "next/link";
import Routes from "@/lib/routes";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {loginSchema} from "@/shared/schemas";
import {InferType} from "yup";
import {useCreateRequest} from "@/hooks";
import {authLoginAction} from "@/lib/actions/auth";
import {handleActionResponse} from "@/lib/response";
import templates from "@/lib/response/templates";
import {useRouter} from "next/navigation";
import {Spinner} from "@/shared/ui/spinner";
import {SpinnerSize} from "@/shared/ui/spinner/spinner";


const Login = ()=>{
    const router = useRouter()
    const [handleLogin, {loading}] = useCreateRequest<undefined, InferType<typeof loginSchema>>(authLoginAction)
    const {register,
        formState:{errors},
        handleSubmit}
        = useForm({resolver:yupResolver(loginSchema)});

    const onSubmit = async (state:InferType<typeof loginSchema>)=>{
     handleActionResponse(await handleLogin(state))
         .useTemplate(templates.primary)
         .onSuccess(()=>{
             router.push(Routes.Initial);
         })
    }

    return (
        <div className={styles["container"]}>
            <header>
                <h2 className={styles["header"]}>Login</h2>
                <p className={styles["subHeader"]}>Welcome back.</p>
            </header>
            <form onSubmit={handleSubmit(onSubmit)} className={styles["form"]}>
                <InputComponent error={{message:errors["email"]?.message}} {...register("email")} label = "Email"/>
                <InputComponent type = "password" error={{message:errors["password"]?.message}} {...register("password")} label = "Password"/>
                <PrimaryButtonComponent className={styles["submit"]} type = "submit">
                    {!loading && "Login"}
                    {loading && <Spinner size={SpinnerSize.small}/>}
                </PrimaryButtonComponent>
            </form>
            <div className={styles["footer"]}>
                {"Don't have an account?"}
                <Link className={styles["link"]} href={Routes.Registration}>Join</Link>
            </div>
        </div>
    )
}


export default Login;
