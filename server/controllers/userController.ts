import { FastifyReply, FastifyRequest } from "fastify";
import { userService } from "../services/userService";
import argon2 from "argon2"
import { registrationBody } from "../schems/registrationRequestBodySchem";
export class UserController{
    static async registration(request:FastifyRequest<{Body:registrationBody}>,reply:FastifyReply){
        try{
            const user = await userService.registration(request.body.name)
            return "OK!"
        }
        catch(e:any){
            switch (e.code){
                case(11000):
                    return reply.send("name is already exist.")
            }
        }
    }
    static async login(request:FastifyRequest,reply:FastifyReply){

    }
}