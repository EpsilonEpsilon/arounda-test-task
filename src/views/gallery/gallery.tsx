import {getPicturesList} from "@/lib/actions/pictures";
import {handleActionResponse} from "@/lib/response";
import {GalleryContentComponent, PaginationComponent} from "@/components/common";
import constants from "@/constants";
import {FC, Suspense} from "react";
import {redirect} from "next/navigation";
import Routes from "@/lib/routes";


interface IProps{
    page?:string
}
const Gallery:FC<IProps> = async ({page})=>{
    const parsedPage = parseInt(page || "") || 1;
    const result = handleActionResponse(
        await getPicturesList(parsedPage, constants.DEFAULT_IMAGES_PER_PAGE)).getData();
    const handlePaginate = async (page:number | string)=>{
        "use server"
        const params = new URLSearchParams();
        params.set("page", page.toString());
        redirect(Routes.Initial +"/?"+params.toString());
    }
    return (
        <>
            <GalleryContentComponent pictures={result?.photos}/>
            {result?.total_pages && <PaginationComponent handlePaginate={handlePaginate} currentPage={parsedPage} total={result?.total_pages}/>}
        </>
    )
}

export default Gallery
