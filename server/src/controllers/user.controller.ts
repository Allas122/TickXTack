import {Body, Controller, Post} from "@nestjs/common";
import {FastifyReply} from "fastify";
import {ApiTags, ApiResponse, ApiExtraModels, getSchemaPath} from "@nestjs/swagger";
import {UserService} from "../services/user.service";
import {CreateUserDto} from "../dto/user/user.registration.body";
import {AuthService} from "../auth/auth.service";
import {LoginUserDto} from "../dto/user/user.login.body";
import {ExceptionResponceDto} from "../dto/exception.res";
@Controller("users")
@ApiTags("/users")
@ApiExtraModels(ExceptionResponceDto)
@ApiResponse({status:200,schema:{$ref: getSchemaPath(ExceptionResponceDto)},description:"This is an exception type"})
export class UserController{
    constructor(private userService:UserService,private authService:AuthService) {}
    @Post("/registration")

    async registration(@Body() body : CreateUserDto,Reply:FastifyReply){
        try {
            const user = await this.userService.CreateUser(body)
            const code = await this.authService.GenerateCode(user.id)
            return code.id;
        }catch (e){
            switch (e.code){
                case "P2002":
                    return {status:400,description:"Unique constraint error"}
                default:
                    return {status:403,description:"Eternal server error"}
            }
        }
    }
    @Post("/login")
    async login(@Body() body:LoginUserDto,Reply:FastifyReply) {
        const user = await this.userService.FindOne({email:body.email})
        if(!user){
            return {code:404,description:"user is not found"}
        }
        const validate =await this.authService.ValidateUser(body.password,user.password)
        if(!validate){
            return "kok"
        }

    }
}