import {Module} from "@nestjs/common";
import {PrismaService} from "../models/prisma.service";
import {UserService} from "./user.service";
import {AuthService} from "../auth/auth.service";
import {DBtoolsService} from "./DBtools.service";
import {NodeMailerModule} from "../mailer/maler.module";

@Module({
    providers: [UserService,AuthService,PrismaService,DBtoolsService,NodeMailerModule],
    exports:[UserService,AuthService,PrismaService,DBtoolsService,NodeMailerModule]
})
export class ServicesModule {}