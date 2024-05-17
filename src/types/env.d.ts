declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NEXT_SHARP_PATH:string
            DATABASE_URL:string
            JWT_SECRET:string

            UNSPLASH_ID:number
            UNSPLASH_ACCESS_KEY:string
            UNSPLASH_SECRET_KEY:string,
            UNSPLASH_API_VERSION:string,
        }
    }
}
