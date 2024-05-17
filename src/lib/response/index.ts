
export enum StatusCode{
    Success= 200,
    BadRequest = 400,
    Unauthorized= 401,
    NotFound= 404,
    Conflict = 409,
    InternalServerError= 500
}


export interface ActionResponseSuccess<T = undefined>{
    type:"success"
    data?:T,
    message:string
}

export interface ActionResponseError{
    type:"error"
    status:StatusCode,
    reason:string | string[]
}

export type ActionResponseType<T> = ActionResponseSuccess<T> | ActionResponseError

const Response = {
    success:<T>(message:string, data?:T):ActionResponseSuccess<T>=>{
        return {
            type:"success",
            message,
            data
        }
    },
    error:(status_code:StatusCode, reason:string | string[]):ActionResponseError=>{
        return {
            type:"error",
            status:status_code,
            reason
        }
    }
}


export function handleActionResponse<T>(response:ActionResponseError | ActionResponseSuccess<T>){
    return {
        onError:(callback?:(response:ActionResponseError)=>void)=>{
            if( response.type === "error"){
                callback && callback(response);
            }
            return handleActionResponse(response);
        },
        onSuccess:(callback?:(response:ActionResponseSuccess<T>)=>void)=>{
            if( response.type === "success"){
                callback && callback(response as ActionResponseSuccess<T>);
            }
            return handleActionResponse(response);
        },
        useTemplate:(callback:((response:ActionResponseError | ActionResponseSuccess<T>)=>void))=>{
            callback(response);
            return handleActionResponse(response);
        },
        getData:()=>{
            if(response.type === "success"){
                return response.data
            }
            return undefined;
        }
    }
}


export default Response;
