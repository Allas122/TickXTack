import {Injectable} from "@nestjs/common";
import {UserService} from "../services/user.service";
import {verify} from "argon2"
import {PrismaService} from "../models/prisma.service";
import {CharacterSetType, generateRandomString} from "ts-randomstring/lib";

@Injectable()
export class AuthService{
    constructor(private userService:UserService,private PrismaService:PrismaService) {}
    async ValidateUser(password:string,hash:string){
        const Verify = await verify(hash,password)
        return !!Verify;
    }
    async GenerateCode(userId: number){
        return this.PrismaService.authCodes.create({data:
                {userId,code:generateRandomString({length:6,charSetType:CharacterSetType.Alphanumeric})}
        })
    }
}