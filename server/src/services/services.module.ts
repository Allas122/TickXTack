import {Module} from "@nestjs/common";
import {PrismaService} from "../models/prisma.service";
import {UserService} from "./user.service";
import {AuthService} from "../auth/auth.service";

@Module({
    providers: [UserService,AuthService,PrismaService],
    exports:[UserService,AuthService,PrismaService]
})
export class ServicesModule {}