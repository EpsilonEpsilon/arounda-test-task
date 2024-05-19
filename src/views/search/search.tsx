import {FC} from "react";
import {handleActionResponse} from "@/lib/response";
import {searchPicturesByQuery} from "@/lib/actions/pictures";
import constants from "@/constants";
import {GalleryContentComponent, PaginationComponent} from "@/components/common";
import {redirect, useRouter} from "next/navigation";
import Routes from "@/lib/routes";

interface IProps{
    searchParams?:{page?:string, query?:string}
}
const Search:FC<IProps> = async ({searchParams})=>{
    const parsedPage = parseInt(searchParams?.page || "") || 1;
    const result = handleActionResponse(await searchPicturesByQuery(searchParams?.query || "",
        parsedPage, constants.DEFAULT_IMAGES_PER_PAGE)).getData();

    const handlePaginate = async (page:number | string)=>{
        "use server"
        const params = new URLSearchParams(searchParams);
        params.set("page", page.toString());
        redirect(Routes.Search +"/?"+params.toString());
    }

    return (
        <>
            <GalleryContentComponent pictures={result?.photos}/>
            {result?.total_pages && <PaginationComponent handlePaginate={handlePaginate} currentPage={parsedPage} total={result?.total_pages}/>}
        </>
    )
}


export default Search;
