import {Injectable} from "@nestjs/common";
import {ConfigModule} from "@nestjs/config";
import {MailerService} from "@nestjs-modules/mailer";
import {compileFile} from "pug";
import {EmailTemplates} from "../mailer/forms/tamplates.module";

@Injectable()
export class EmailService{
    constructor(private mailService : MailerService,private templates: EmailTemplates) {
    }
    SendCode(code:string,email:string){
        this.mailService.sendMail({
            to:email,
            from:"TickXTack team.",
            html:this.templates.getCodeTemplate("kek")
        })
    }
}