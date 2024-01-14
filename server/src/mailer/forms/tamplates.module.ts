import {Injectable, Module} from "@nestjs/common";
import {compileFile, renderFile} from "pug";

@Injectable()
export class EmailTemplates{
    getCodeTemplate(code){
        return renderFile("code.pug",{})
    }
}

@Module({
    providers:[EmailTemplates]
})
export class EmailTemplatesModule {}