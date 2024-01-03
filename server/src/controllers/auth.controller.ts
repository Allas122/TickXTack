import {ApiResponse, ApiTags, getSchemaPath} from "@nestjs/swagger";
import {ExceptionResponceDto} from "../dto/exception.res";
import {Body, Controller, Post} from "@nestjs/common";
import {AuthCheckCodeBody} from "../dto/auth/auth.checkcode.body";
import {FastifyReply} from "fastify";
@Controller("/auth")
@ApiTags("/Auth")
@ApiResponse({status:200,schema:{$ref: getSchemaPath(ExceptionResponceDto)},description:"This is an exception type"})
export class AuthController{
    @Post("/code_auth")
    CodeVerification(@Body() body : AuthCheckCodeBody,Reply : FastifyReply){

    }
}