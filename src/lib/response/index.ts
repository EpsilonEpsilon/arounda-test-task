
export enum StatusCode{

}



const response = {
    success:(message:string, data?:{[key:string]:any} | string | number)=>{
        return {
            type:"success",
            message,
            data
        }
    },
    error:(status_code:StatusCode, reason:string)=>{
        return {
            type:"error",
            status:status_code,
            reason
        }
    }
}


export default response;
