"use client"
import {ActionResponseType} from "@/lib/response";
import {useState} from "react";
type Response<R> = ActionResponseType<R>
type CreateHookType<R, T> = [(data:T)=>Promise<ActionResponseType<R>>, {loading:boolean, data:Response<R>}];
function useCreateRequest<R, T = {}>(request:(data:T)=>Promise<ActionResponseType<R>>):CreateHookType<R, T>{
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState<ActionResponseType<R> | undefined>(undefined)
    const handleRequest = async (data:T)=>{
        setLoading(true);
        const response = await request(data);
        setResponse(response);
        setLoading(false);

        return response;
    }

    return [handleRequest, {loading, data:response!}];
}

export default useCreateRequest;
