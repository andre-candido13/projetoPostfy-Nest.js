import { IsString, IsEmail, IsNotEmpty, IsStrongPassword } from "class-validator";

export class CreateUserDTO {
    @IsString()
    name: string;

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;


    @IsNotEmpty()
    @IsString()
    @IsStrongPassword({minLength:6})
    password: string

    @IsNotEmpty()
    avatar: string
}