import {Module} from "@nestjs/common";
import {UserController} from "./controllers/user.controller";
import {ConfigModule} from  "@nestjs/config"
import config from "./config/config"
import {PrismaService} from "./models/prisma.service";
import {UserService} from "./services/user.service";
import {AuthModule} from "./auth/auth.module";
import {ServicesModule} from "./services/services.module";
import {ControllersModule} from "./controllers/controllers.module";

@Module({
    controllers: [],
    imports:[ConfigModule.forRoot({
        load:[config]
    }),ServicesModule,ControllersModule],
})


export class AppModule {}