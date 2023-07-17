
import { IsString, IsNotEmpty, IsDateString } from "class-validator";

export class CreatePublicationsDTO {

    @IsNotEmpty()
    @IsString()
    image: string;

   
    @IsNotEmpty()
    @IsString()
    title: string;


    @IsNotEmpty()
    @IsString()
    text: string

    @IsDateString()
    dateToPublish: string

    published: boolean

    @IsString()
    socialMedia: string

}