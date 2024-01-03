import {ApiProperty} from "@nestjs/swagger";

export class ExceptionResponceDto{
    @ApiProperty()
    code: number
    @ApiProperty()
    description:string
}