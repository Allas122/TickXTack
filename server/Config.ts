import "dotenv/config"

export class Config{
    HOST:string;
    PORT:number;
    JWT_KEY:string;
    MONGO_CONNECTION:string;
    constructor(HOST:string="0.0.0.0",PORT:string="8080",JWT_KEY:string,MONGO_CONNECTION:string){
        this.HOST = HOST
        this.PORT = parseInt(PORT)
        if (!JWT_KEY){
            throw new Error("JWT_KEY is required parametr for .env")
        }
        if (!MONGO_CONNECTION){
            throw new Error("MONGO_CONNECTION is required parametr for .env")
        }
        this.MONGO_CONNECTION = MONGO_CONNECTION
        this.JWT_KEY = JWT_KEY 
    }
}

global.config =new Config(process.env.HOST,process.env.PORT,process.env.JWT_KEY,process.env.MONGO_CONNECTION)
