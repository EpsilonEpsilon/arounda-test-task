import {SearchView} from "@/views/search";
import {FC, Suspense} from "react";
import {LoaderComponent} from "@/shared/ui/loader";

interface IProps{
    searchParams?:{page?:string, query?:string}
}
const Page:FC<IProps> = ({searchParams})=>{
    return(
        <Suspense fallback={<LoaderComponent/>}>
            <SearchView searchParams = {searchParams}/>
        </Suspense>
    )

}


export default Page;
