import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString, Length, MinLength } from "class-validator";

export class updateTeamDto {
     @ApiProperty({
          description: "Le nom de l'équipe",
          example: 'FC Barcelona',
          required: false,
     })
     @IsString()
     @Length(3, 50)
     @IsOptional()
     name: string;

     @ApiProperty({
          description: "Le pays de l'équipe",
          example: 'Espagne',
          required: false,
     })
     @IsString()
     @MinLength(3)
     @IsOptional()
     country: string;
}