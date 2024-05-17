import {string} from "yup";

const createEmailValidation = ()=>{
    return string().email("Invalid email").required("Email is required field");
}

export default createEmailValidation;
