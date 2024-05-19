"use server"


import {unsplashServerApi} from "@/lib/unsplash";
import response, {ActionResponseType, StatusCode} from "@/lib/response";
import {Full} from "unsplash-js/src/methods/photos/types";

interface IPicture extends Full{
    downloads:number,
    tags: { "title": string }[],
}
type Response = ActionResponseType<IPicture>
const getPicture = async (id:string):Promise<Response>=>{
    try{
        const result = await unsplashServerApi.photos.get({photoId:id});
        return response.success("Success", result.response as IPicture);
    }catch (e){
        return response.error(StatusCode.NotFound, "Image not found");
    }
}

export default getPicture;
