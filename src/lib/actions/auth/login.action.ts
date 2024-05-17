"use server"

import {InferType, ValidationError} from "yup";
import {loginSchema} from "@/shared/schemas";
import response, {ActionResponseType, StatusCode} from "@/lib/response";
import prisma from "@/lib/db/prisma";
import * as crypto from "crypto";
import jwt from "jsonwebtoken";
import {cookies} from "next/headers";
import hashPwd from "@/shared/utils/hashPwd";

type Response = ActionResponseType<undefined>
const login = async (data:InferType<typeof loginSchema>):Promise<Response>=>{
    try{
        await loginSchema.validate(data);
        const user = await prisma.user.findUnique({where:{email:data.email}});
        if(!user) return response.error(StatusCode.NotFound,
            "Sorry, we couldn't find an account associated with the provided email address.");
        const {password, id, salt, ...restUser} = user;

        try{
            const {key:pwd} = await hashPwd(salt, data.password);
            const isPasswordsMatches = crypto.timingSafeEqual(Buffer.from(pwd), Buffer.from(user.password));
            if(!isPasswordsMatches) return response.error(StatusCode.Unauthorized, "Incorrect credentials");
        }catch (e){
            return response.error(StatusCode.Unauthorized, "Incorrect credentials");
        }
        const token = jwt.sign(user, process.env.JWT_SECRET!, {expiresIn:"7d"});
        cookies().set("token", token);
        return response.success(`Welcome back ${user.first_name}!!`);
    }catch (e){
        if(e instanceof ValidationError){
            return response.error(StatusCode.BadRequest, e.inner.map(e => e.message));
        }
        return response.error(StatusCode.InternalServerError, "Unexpected server error");
    }
}


export default login;
