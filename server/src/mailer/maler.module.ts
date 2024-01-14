import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
import Config from "../config/config"
import {EmailTemplatesModule} from "./forms/tamplates.module";
@Module({
    imports: [
        MailerModule.forRoot({
            transport:Config().EMAIL_HOST,
            defaults: {
                from: 'TickXTack',
            },
            template: {
                dir: __dirname + '/templates',
                adapter: new PugAdapter(),
                options: {
                    strict: true,
                }
            }
        }),
    EmailTemplatesModule],
})
export class NodeMailerModule{}