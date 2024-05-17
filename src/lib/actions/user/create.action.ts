"use server"

import {IUser} from "@/lib/db/types";
import {registrationSchema} from "@/shared/schemas";
import {ValidationError} from "yup";
import response, {ActionResponseType, StatusCode} from "@/lib/response";
import prisma from "@/lib/db/prisma";
import {hashHelper} from "@/shared/utils";
import jwt from "jsonwebtoken"
import {cookies} from "next/headers";

type Response = ActionResponseType<IUser>
const createAction = async(user:IUser):Promise<Response>=>{
    try{
        await registrationSchema.validate(user);
        const existingUser = await prisma.user.findFirst({where:{email:user.email}});
        if(existingUser) return response.error(StatusCode.Conflict, "User is already exists");
        const {id, ...copiedUser} = {...user};
        const {key:password, salt} = await hashHelper(copiedUser.password);
        const {salt:secret, password:pass, id:uid,
            ...createdUser}
            = await prisma.user.create({data:{...copiedUser, salt, password}})
        const token = jwt.sign(createdUser, process.env.JWT_SECRET!, {expiresIn:"7d"});
        cookies().set("token", token);
        return response.success("User successfully created", createdUser as IUser);
    }catch (e){
        if(e instanceof ValidationError){
            return response.error(StatusCode.BadRequest, e.inner.map(err => err.message));
        }
        console.log(e);
        return response.error(StatusCode.InternalServerError, "Unexpected server error");
    }

}

export default createAction;
