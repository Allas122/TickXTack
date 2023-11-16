import fp from "fastify-plugin"
import { FastifyInstance } from "fastify"
import fastifyCors from "@fastify/cors"
export const addAllPlugins = fp(function(instance:FastifyInstance,opts:Object,done:Function){
    instance.register(fastifyCors)
    done()
})