import { FastifyReply, FastifyRequest } from "fastify";
import { createServerBody, getAllServersBody } from "../schems/ServerRequestBodySchems";
import { ServerService } from "../services/serverService";
import { userModel } from "../model/userModel";
export class HubController{
    static async createServer(request:FastifyRequest<{Body:createServerBody}>,reply:FastifyReply){
        var {name,password,creatorId} = request.body;
        if(await userModel.exists({_id:creatorId})){
            return ServerService.creareServer(name,creatorId,password)
        }else{
            return reply.code(400).send("User not found")
        }
    }
    static async getAllServers(request:FastifyRequest<{Params:getAllServersBody}>,reply:FastifyReply){
        return ServerService.getAllServices(request.params.skip);
    }
}