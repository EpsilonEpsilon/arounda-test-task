import {string} from "yup";

const createNameLikeValidation = (name:string)=>{
    return string()
        .min(5, `${name} should be at least 5 symbols`)
        .max(20, `${name} can not be more that 20 symbols`)
        .matches(/^[A-Za-z]+$/, {
            message:`The ${name} should consist only of Latin characters.`
        });
}

export default createNameLikeValidation;
