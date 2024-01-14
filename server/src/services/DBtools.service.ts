import {Injectable} from "@nestjs/common";
import {ExceptionResponceDto} from "../dto/exception.res";
import {PrismaClientValidationError} from "prisma/prisma-client/runtime/library";
interface DBerror{
    code:string
}
@Injectable()
export class DBtoolsService{
    CatchWithStatus(e:DBerror) : ExceptionResponceDto{
        switch (e.code){
            case "P2002":
                return {status:400,description:"Unique constraint error"}
            default:
                return {status:403,description:"Eternal server error"}
        }
    }
}