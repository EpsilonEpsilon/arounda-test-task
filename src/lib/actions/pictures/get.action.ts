import {unsplashServerApi} from "@/lib/unsplash";
import response, {ActionResponseType, StatusCode} from "@/lib/response";
import {Basic} from "unsplash-js/dist/methods/photos/types";


type Response = ActionResponseType<{photos:Basic[] | undefined, total_pages:number | undefined}>
const getAction = async (page:number, perPage:number):Promise<Response>=>{
    try{
        const apiResponse = await unsplashServerApi.photos.list({perPage, page});
        const total_pages = Math.round((apiResponse.response?.total || 0) / perPage) || undefined;
        return response.success(`Photos page:${page}, length:${perPage}`, {photos:apiResponse.response?.results, total_pages});
    }catch(e){
        return response.error(StatusCode.InternalServerError, "Unexpected server error");
    }
}


export default getAction;
