import { Module } from '@nestjs/common';
import { TeamsController } from './teams.controller';
import { TeamsService } from './teams.service';
// import { PrismaModule} from '../prisma/prisma.module'
import { PrismaService } from '../prisma.service';



@Module({
  // imports: [PrismaModule],
  controllers: [TeamsController],
  providers: [TeamsService, PrismaService],
})
export class TeamsModule {}
