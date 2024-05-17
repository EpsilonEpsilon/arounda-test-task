import {object, string} from "yup";
import {createEmailValidation, createPasswordValidation} from "@/shared/utils";

const login = object({
    email:createEmailValidation(),
    password:createPasswordValidation(),
})


export default login;
