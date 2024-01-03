import {DiscordStrategy} from "./Discord.strategy";
import {Module} from "@nestjs/common";
import {PassportModule} from "@nestjs/passport";
import {AuthService} from "./auth.service";
import {UserService} from "../services/user.service";
import {AppModule} from "../app.module";

@Module({
    imports:[PassportModule],
    providers:[AuthService],
})

export class AuthModule{}