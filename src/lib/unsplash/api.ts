import { createApi } from 'unsplash-js';

const serverApi = createApi({
    accessKey:process.env.UNSPLASH_ACCESS_KEY!,
    apiVersion:process.env.UNSPLASH_API_VERSION!,
})


export default serverApi;
