import { IsNotEmpty } from "class-validator";

export class UserRequestDto {

    @IsNotEmpty()
    id: string;

    @IsNotEmpty()
    fullname: string;

    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    username: string;
}