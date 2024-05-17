import {ActionResponseError, ActionResponseSuccess} from "@/lib/response/index";
import {toast} from "react-toastify";


const primary = <T>(response:ActionResponseError | ActionResponseSuccess<T>)=>{
    if(response.type === "success"){
        toast.success(response.message)
    }else{
        if(response.reason instanceof Array){
            response.reason.forEach(err =>toast.error(err));
        }else{
            toast.error(response.reason)
        }
    }
}



const responseTemplates = {
    primary
}

export default responseTemplates;
