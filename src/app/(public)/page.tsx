import Gallery from "@/views/gallery/gallery";

const Page = ({searchParams}: {
    searchParams?: {page?: string};
})=>{
    return <Gallery page={searchParams?.page}/>
}

export default Page;
