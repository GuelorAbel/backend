import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { updateTeamDto } from './dto/update-team.dto';

@Injectable()
export class TeamsService {
     constructor(private readonly prisma: PrismaService) {}

     // méthode qui récupère toutes les équipes
     async getAllTeams() {
          return this.prisma.team.findMany();
     }

     // méthode qui récupère une équipe par son ID
     async getOneTeam(id: number) {
          const team = await this.prisma.team.findUnique({
               where: { id },
          });
          
          // si l'équipe n'existe pas, on renvoie une erreur
          if (!team) {
               throw new NotFoundException("Aucune équipe n'existe avec cet ID.");
          }
          return team;
     }

     // méthode qui crée une nouvelle équipe
     async createTeam(data: CreateTeamDto) {
          return this.prisma.team.create({
               data,
          });
          
     }

     // méthode qui met à jour une équipe
     async updateTeam(id: number, data: updateTeamDto) {
          const teamExists = await this.prisma.team.findUnique({
               where: { id },
          });

          // si l'équipe existe déjà, on renvoie une erreur
          if (!teamExists) {
               throw new BadRequestException("Vous ne pouvez pas modifier l'ID d'une équipe qui n'existe pas.");
          }
          return this.prisma.team.update({
               where: { id },
               data,
          });
     }


     // méthode qui supprime une équipe
     async deleteTeam(id: number) {
          const teamExists = await this.prisma.team.findUnique({
               where: { id },
          });

          // si l'équipe n'existe pas, on renvoie une erreur
          if (!teamExists) {
               throw new NotFoundException("Cette équipe n'existe pas, aucunes opérations ne peuvent être effectuées.");
          }
          return this.prisma.team.delete({
               where: { id },
          });
     }
}
