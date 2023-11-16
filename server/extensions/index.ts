import fp from "fastify-plugin"
import { FastifyInstance } from "fastify"
export const addAllPlugins = fp(function(instance:FastifyInstance,opts:Object,done:Function){
    instance.register(require("@fastify/cors"))
    instance.register(require("@fastify/formbody"))
    done()
})