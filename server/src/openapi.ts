import {DocumentBuilder} from "@nestjs/swagger";

export const config = new DocumentBuilder().setTitle("Api").setVersion("1.0").build()
