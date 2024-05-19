import Gallery from "@/views/gallery/gallery";
import {Suspense} from "react";
import {LoaderComponent} from "@/shared/ui/loader";

const Page = ({searchParams}: {
    searchParams?: {page?: string};
})=>{
    return (
        <Suspense fallback={<LoaderComponent/>}>
            <Gallery page={searchParams?.page}/>
        </Suspense>
    )
}

export default Page;
