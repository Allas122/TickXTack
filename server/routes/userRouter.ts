import fp from "fastify-plugin";
import { FastifyInstance } from "fastify";
import { registrationRequestBodySchem,registrationBody} from "../schems/registrationRequestBodySchem";
import { UserController } from "../controllers/userController";
export const addUserRoutes = fp(
    function(instance:FastifyInstance,opts:Object,done:Function){
        instance.post<{Body:registrationBody}>("/user/registration",
        {schema:{body:registrationRequestBodySchem}}
        ,UserController.registration)
        done()
    }
)