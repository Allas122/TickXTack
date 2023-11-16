import { hash } from "argon2";
import { serverPlaneModel } from "../model/serverPlane";
import { createServerBody } from "../schems/ServerRequestBodySchems";
export class ServerService{
    static async creareServer(name:string,creatorId:string,password?:string){
        if(password){
            password = await hash(password)
        }
        var server = await serverPlaneModel.create({name,creatorId,password})
        return server
    }
    static async getAllServices(skip:number){
        var server = await serverPlaneModel.find({},{},{sort:{'created_at':-1},skip,limit:10})
        return server
    }
}