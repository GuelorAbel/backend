import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeamsModule } from './teams/teams.module';
import { PostesModule } from './postes/postes.module';

@Module({
  imports: [TeamsModule, PostesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
