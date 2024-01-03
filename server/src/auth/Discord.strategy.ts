import {Strategy} from "passport-discord";
import {Injectable} from "@nestjs/common";
import {PassportStrategy} from "@nestjs/passport";
@Injectable()
export class DiscordStrategy extends PassportStrategy(Strategy){
    constructor() {
        super()
    }
}