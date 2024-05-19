import {SearchView} from "@/views/search";
import {FC, Suspense} from "react";

interface IProps{
    searchParams?:{page?:string, query?:string}
}
const Page:FC<IProps> = ({searchParams})=>{
    return(
        <SearchView searchParams = {searchParams}/>
    )

}


export default Page;
