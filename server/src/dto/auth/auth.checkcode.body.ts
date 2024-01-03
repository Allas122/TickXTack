import {ApiProperty} from "@nestjs/swagger";

export class AuthCheckCodeBody{
    @ApiProperty()
    id:number;
    @ApiProperty()
    code: string;
}