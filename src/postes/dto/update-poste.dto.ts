import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString, Length } from "class-validator";

export class UpdatePosteDTO {
     @ApiProperty({
          description: "Nom du poste d'un joueur",
          example: "Attaquant",
     })
     @IsString({
          message: 'Le nom du poste doit être une chaîne de caractères',
     })
     @Length(3, 50, {
          message: "Le poste d'un joueur doit contenir entre 3 et 50 caractères",
     })
     @IsOptional()
     name: string;
}