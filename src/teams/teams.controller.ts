import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { updateTeamDto } from './dto/update-team.dto';

@Controller('teams')
export class TeamsController {
     constructor(private readonly teamServ: TeamsService) {}

     // la route pour récupérer toutes les équipes
     // GET /teams
     @Get()
     getAllTeams() {
          return this.teamServ.getAllTeams();
     }

     // la route pour récupérer une équipe par son ID
     // GET /teams/:id
     @Get('/:id')
     getOneTeam(@Param('id', ParseIntPipe) id: number) {
          return this.teamServ.getOneTeam(id);
     }

     // la route pour créer une nouvelle équipe
     // POST /teams
     @Post('/add-team')
     createTeam(@Body() data: CreateTeamDto) {
          return this.teamServ.createTeam(data);
     }

     // la route pour mettre à jour une équipe
     // PUT /teams/:id
     @Put('/:id/edit-team')
     updateTeam(@Param('id', ParseIntPipe) id: number, @Body() data: updateTeamDto) {
          return this.teamServ.updateTeam(id, data);
     }


     // la route pour supprimer une équipe
     // DELETE /teams/:id
     @Delete('/:id/delete')
     deleteTeam(@Param('id', ParseIntPipe) id: number) {
          return this.teamServ.deleteTeam(id);
     }

}
