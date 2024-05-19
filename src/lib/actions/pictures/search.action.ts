"use server"

import {unsplashServerApi} from "@/lib/unsplash";
import response, {ActionResponseType, StatusCode} from "@/lib/response";
import {Basic} from "unsplash-js/dist/methods/photos/types";

type Response = ActionResponseType<{photos:Basic[] | undefined, total_pages:number | undefined}>
const searchAction = async (query:string, page:number, perPage:number):Promise<Response>=>{
    try{
        const apiResponse = await unsplashServerApi.search.getPhotos({query, page, perPage});
        const total_pages = apiResponse.response?.total_pages;
        return response.success(`Search photo:${page}, length:${perPage}, query:${query}`, {photos:apiResponse.response?.results, total_pages});
    }catch (e){
        console.log(e);
        return response.error(StatusCode.InternalServerError, "Unexpected server error");
    }
}


export default searchAction;
