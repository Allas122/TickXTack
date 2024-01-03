import {FastifyAdapter, NestFastifyApplication} from "@nestjs/platform-fastify";
import {NestFactory} from "@nestjs/core";

import {AppModule} from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import * as fs from "fs"
import {config} from "./openapi";
import * as process from "process";

async function Bootstrap(){
    const app = await NestFactory.create<NestFastifyApplication>(
        AppModule,
        new FastifyAdapter({}),
        {cors:true}
    )
    const document = SwaggerModule.createDocument(app,config)
    SwaggerModule.setup("api",app,document)
    fs.writeFileSync("./swagger-spec.json",JSON.stringify(document))
    await app.listen(process.env.PORT||8080,process.env.IP,()=>{
        console.log(`started on ${process.env.IP}:${process.env.PORT}`)
    })
}

Bootstrap()