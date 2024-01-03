import {Module} from "@nestjs/common";
import {PrismaService} from "../models/prisma.service";
import {UserController} from "./user.controller";
import {AuthController} from "./auth.controller";
import {ServicesModule} from "../services/services.module";

@Module({
    controllers: [UserController,AuthController],
    imports:[ServicesModule],
    exports:[]
})
export class ControllersModule {}