import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, Length } from "class-validator";

export class CreatePosteDto {
     @ApiProperty({
          description: "Nom du poste d'un joueur",
          example: "Attaquant",
          required: true,
     })
     @IsString({
          message: 'Le nom du poste doit être une chaîne de caractères',
     })
     @Length(3, 50, {
          message: "Le poste d'un joueur doit contenir entre 3 et 50 caractères",
     })
     @IsNotEmpty({
          message: "Le nom du poste ne peut pas être vide",
     })
     name: string;
}
