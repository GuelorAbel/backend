import { Module } from '@nestjs/common';
import { PostesController } from './postes.controller';
import { PostesService } from './postes.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [PostesController],
  providers: [PostesService, PrismaService]
})
export class PostesModule {}
