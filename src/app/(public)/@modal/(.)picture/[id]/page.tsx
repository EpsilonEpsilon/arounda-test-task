import {Modal} from "@/components/common/modal/modal";
import {FC, Suspense} from "react";
import {PhotoView} from "../../../../../views/picture";
import {LoaderComponent} from "@/shared/ui/loader";

interface IProps{
    params:{
        id:string
    }
}
const Page:FC<IProps> = ({params})=>{
    return (
        <Modal>
            <Suspense fallback={<LoaderComponent/>}>
                <PhotoView id={params.id} isModal={true}/>
            </Suspense>
        </Modal>
    )
}

export default Page;
