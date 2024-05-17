"use server"
import {cookies} from "next/headers";
import jwt from "jsonwebtoken";
const getServersideAuthState = ()=>{
    const token = cookies().get("token");
    if(!token?.value) return false;
    try{
        return !!jwt.verify(token.value, process.env.JWT_SECRET!);
    }
    catch (e){
        return false;
    }
}


export default getServersideAuthState;
