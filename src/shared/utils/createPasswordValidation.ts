import {string} from "yup";

const createPasswordValidation = ()=>{
    return string()
        .min(8, "Password should contain at least 8 chars").required("Password is required field")
}

export default createPasswordValidation;
