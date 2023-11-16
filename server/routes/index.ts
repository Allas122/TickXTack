import { FastifyInstance } from "fastify";
import fp from "fastify-plugin"
import { addUserRoutes } from "./userRouter";
import { addHubRoutes } from "./hubRouter";
export const addAllRoutes = fp(function (instance:FastifyInstance,opts:Object,done:Function){
    instance.register(addUserRoutes)
    instance.register(addHubRoutes)
    done()
})
