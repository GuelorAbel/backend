import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreatePosteDto } from './dto/create-poste.dto';
import { UpdatePosteDTO } from './dto/update-poste.dto';

@Injectable()
export class PostesService {
     constructor(private readonly prisma: PrismaService) {}

     // méthode pour récupérer tous les postes
     async findAllPostes() {
          return this.prisma.poste.findMany();
     }

     // méthode pour récupérer un poste par son ID
     async findPosteById(id: number) {
          const poste = await this.prisma.poste.findUnique({
               where: { id },
          });

          if (!poste) {
               throw new NotFoundException("Le poste n'existe pas");
          }

          return poste;
     }

     // méthode pour créer un nouveau poste
     async createPoste(data: CreatePosteDto) {
          const posteExists = await this.prisma.poste.findUnique({
               where: { name: data.name },
          });

          if (posteExists) {
               throw new BadRequestException("Le poste existe déjà");
          }

          return this.prisma.poste.create({
               data,
          });
     }

     // méthode pour mettre à jour un poste
     async updatePoste(id: number, daata: UpdatePosteDTO) {
          const posteExists = await this.prisma.poste.findUnique({
               where: { id },
          });

          if (!posteExists) {
               throw new BadRequestException("Le poste n'existe pas");
          }

          return this.prisma.poste.update({
               where: { id },
               data: daata,
          });
     }

     // méthode pour supprimer le poste d'un joueur
     async deletePoste(id: number) {
          const posteExists = await this.prisma.poste.findUnique({
               where: { id },
          });

          if (!posteExists) {
               throw new NotFoundException("Le poste n'existe pas");
          }

          return this.prisma.poste.delete({
               where: { id },
          });
     }
     
}

