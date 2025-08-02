import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PostesService } from './postes.service';
import { CreatePosteDto } from './dto/create-poste.dto';
import { UpdatePosteDTO } from './dto/update-poste.dto';

@Controller('postes')
export class PostesController {
     constructor(private readonly postesServ: PostesService) {}

     // méthode pour récupérer tous les postes
     @Get()
     async findAllPostes() {
          return this.postesServ.findAllPostes();
     }

     // méthode pour récupérer un poste par son ID
     @Get('/:id')
     async findPosteById(@Param('id') id: number) {
          return this.postesServ.findPosteById(id);
     }

     // méthode pour créer un nouveau poste
     @Post('/create-poste')
     async createPoste(@Body() createPosteDto: CreatePosteDto) {
          return this.postesServ.createPoste(createPosteDto);
     }

     // méthode pour mettre à jour un poste
     @Put('/:id/edit-poste')
     async updatePoste(@Param('id') id: number, @Body() updatePosteDto: UpdatePosteDTO) {
          return this.postesServ.updatePoste(id, updatePosteDto);
     }

     // méthode pour supprimer un poste
     @Delete('/:id/delete-poste')
     async deletePoste(@Param('id') id: number) {
          return this.postesServ.deletePoste(id);
     }
}
