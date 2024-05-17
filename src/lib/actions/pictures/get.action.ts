import {unsplashServerApi} from "@/lib/unsplash";
import response, {ActionResponseType, StatusCode} from "@/lib/response";
import {Basic} from "unsplash-js/dist/methods/photos/types";


type Response = ActionResponseType<Basic[] | undefined>
const getAction = async (page:number, perPage:number):Promise<Response>=>{
    try{
        const apiResponse = await unsplashServerApi.photos.list({perPage, page});
        return response.success(`Photos page:${page}, length:${perPage}`, apiResponse.response?.results);
    }catch(e){
        return response.error(StatusCode.InternalServerError, "Unexpected server error");
    }
}


export default getAction;
