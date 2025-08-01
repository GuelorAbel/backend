
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
     async onModuleInit() {
          await this.$connect();
     }

     // déconnexion à la base de données
     async onModuleDestroy() {
          await this.$disconnect();
     }
}
