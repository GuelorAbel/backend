import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, Length, MinLength } from "class-validator";

export class CreateTeamDto {
     @IsString({
          message: "Le nom de l'équipe doit être une chaîne de caractères.",
     })
     @Length(2, 30, {
          message: "Le nom de l'équipe doit comporter entre 3 et 50 caractères.",
     })
     @IsNotEmpty()
     @ApiProperty({
          description: "Le nom de l'équipe",
          example: "FC Barcelona",
          minLength: 2,
          maxLength: 30,
          type: String,
          required: true,
          nullable: false,
     })
     name: string;

     @IsString({
          message: "Le pays doit être une chaîne de caractères.",
     })
     @IsNotEmpty()
     @MinLength(3, {
          message: "Le pays doit comporter au moins 3 caractères.",
     })
     @ApiProperty({
          description: "Le pays de l'équipe",
          example: "Espagne",
          minLength: 3,
          type: String,
          required: true,
          nullable: false,
     })
     country: string;
}