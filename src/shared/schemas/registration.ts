import {object, string} from "yup";
import {createNameLikeValidationHelper} from "@/shared/utils";
import regex from "@/shared/regex";


const registration = object({
    first_name:createNameLikeValidationHelper("Full Name"),
    last_name:createNameLikeValidationHelper("Last Name"),
    username:createNameLikeValidationHelper("Last Name")
        .matches(regex.onlyLettersNumbersUnderscore),
    email:string().email("You should provide valid email"),
    password:string()
        .min(8, "Password should contain at least 8 chars")
})


export default registration;
