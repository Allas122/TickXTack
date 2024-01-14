import {ApiProperty} from "@nestjs/swagger";

export class ExceptionResponceDto{
    @ApiProperty()
    status: number
    @ApiProperty()
    description:string
}