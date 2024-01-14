import {ApiResponse, ApiTags, getSchemaPath} from "@nestjs/swagger";
import {ExceptionResponceDto} from "../dto/exception.res";
import {Body, Controller, Post} from "@nestjs/common";
import {AuthCheckCodeBody} from "../dto/auth/auth.checkcode.body";
import {FastifyReply} from "fastify";
import {PrismaService} from "../models/prisma.service";
import {AuthService} from "../auth/auth.service";
@Controller("/auth")
@ApiTags("/Auth")
@ApiResponse({status:200,schema:{$ref: getSchemaPath(ExceptionResponceDto)},description:"This is an exception type"})
export class AuthController{
    constructor(private AuthService:AuthService) {
    }
    @Post("/code_auth")
    CodeVerification(@Body() body : AuthCheckCodeBody,Reply : FastifyReply){
        return this.AuthService.ValidateCode(body.id,body.code)
    }
}