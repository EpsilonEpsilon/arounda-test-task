"use server"
import "server-only"
import {cookies} from "next/headers";

const removeServersideCookie = (key:string)=>{
    cookies().delete(key);
}

export default removeServersideCookie;
