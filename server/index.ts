import fastify from "fastify";
import "./Config"
import { Connection } from "./mongoDB";
import { addAllRoutes } from "./routes";
import { addAllPlugins } from "./plugins";
var server = fastify()

server.register(addAllRoutes)
server.register(addAllPlugins)
server.listen({port:global.config.PORT,host:global.config.HOST},async (err:Error | null,address:string)=>{
    if(err){
        throw err;
    }
    console.log(`server is started on ${address}`)
})