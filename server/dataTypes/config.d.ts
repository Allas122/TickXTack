
declare namespace NodeJS{
    export interface ProcessEnv{
        HOST:string
        PORT:string
        JWT_KEY:string
        MONGO_CONNECTION:string
    }
}