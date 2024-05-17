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
import {userCreateAction} from "@/lib/actions/user";
import {handleActionResponse} from "@/lib/response";
import responseTemplates from "@/lib/response/templates";
import {useCreateRequest} from "@/hooks";
import {IUser} from "@/lib/db/types";
import {Spinner} from "@/shared/ui/spinner";
import {SpinnerSize} from "@/shared/ui/spinner/spinner";
import {useRouter} from "next/navigation";

type AuthorizationType = InferType<typeof registrationSchema>


const Registration = ()=>{
    const router = useRouter()
    const {register,
        formState:{errors, isValid},
        handleSubmit} = useForm<AuthorizationType>({resolver:yupResolver(registrationSchema)});
    const [handleCreateUser, {loading}] = useCreateRequest<IUser, IUser>(userCreateAction);

    const onSubmit = async (state:AuthorizationType) =>{
     handleActionResponse(await handleCreateUser(state))
         .useTemplate(responseTemplates.primary)
         .onSuccess(()=>{
             router.push(Routes.Initial);
         })
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
                    {...register("username")}
                    error={{message:errors["username"]?.message}}
                    hint={"(only letters, numbers and underscores)"} label = "Username"/>
                <InputComponent
                    type = "password"
                    error={{message:errors["password"]?.message}}
                    {...register("password")}
                    hint={"(min. 8 char)"} label = "Password"/>

                <PrimaryButtonComponent className = {styles["submitButton"]} disabled={!isValid || loading} type={"submit"}>
                    {!loading && "Join"}
                    {loading && <Spinner size={SpinnerSize.small}/>}
                </PrimaryButtonComponent>
            </form>
        </div>
    )
}

export default Registration;
