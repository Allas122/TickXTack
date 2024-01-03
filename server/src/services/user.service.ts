import {Injectable} from "@nestjs/common";
import {PrismaService} from "../models/prisma.service";
import {User,Prisma,} from "@prisma/client"

import {hash} from "argon2"
@Injectable()
export class UserService{
    constructor(private PrismaService:PrismaService) {}
    public async FindOne(query:Prisma.UserWhereUniqueInput){
        return this.PrismaService.user.findUnique({where:query})
    }
    public async CreateUser(data: Prisma.UserCreateInput):Promise<User>{
        data.password = await hash(data.password)
        return this.PrismaService.user.create({data});
    }
}