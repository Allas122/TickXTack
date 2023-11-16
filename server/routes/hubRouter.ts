import fp from "fastify-plugin";
import { FastifyInstance } from "fastify";
import {createServerBody, createServerRequestBodySchem, getAllServersRequestBodySchem} from "../schems/ServerRequestBodySchems"
import { HubController } from "../controllers/hubController";
export const addHubRoutes = fp(function(instance:FastifyInstance,opts:Object,done:Function){
    instance.post("/hub/create",{schema:{body:createServerRequestBodySchem}},HubController.createServer)
    instance.get("/hub/getAllServers-s:skip",{schema:{params:getAllServersRequestBodySchem}},HubController.getAllServers)
    done()
})
