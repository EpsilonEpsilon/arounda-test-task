import {object, string} from "yup";
import {createEmailValidation, createNameLikeValidationHelper, createPasswordValidation} from "@/shared/utils";
import regex from "@/shared/regex";


const registration = object({
    first_name:createNameLikeValidationHelper("Full Name").required("First name is required field"),
    last_name:createNameLikeValidationHelper("Last Name").required("Last name is required field"),
    username:createNameLikeValidationHelper("Username").required("Username is required field")
        .matches(regex.onlyLettersNumbersUnderscore),
    email:createEmailValidation(),
    password:createPasswordValidation(),
})


export default registration;
