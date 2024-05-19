import {PhotoView} from "../../../../views/picture";
import {FC, Suspense} from "react";
import {LoaderComponent} from "@/shared/ui/loader";


interface IProps{
    params:{id:string}
}
const Page:FC<IProps> = ({params})=>{
    return (
        <Suspense fallback={<LoaderComponent/>}>
            <PhotoView id={params.id} isModal={false}/>
        </Suspense>
    )
}

export default Page;
