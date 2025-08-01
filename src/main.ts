import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    // Ce pipe validera les requêtes entrantes et les transformera
    // selon les DTO définis dans votre application.
    new ValidationPipe({
      whitelist: true,
      transform: true,
    })
  );

  // Configuration de Swagger pour la documentation de l'API
  const config = new DocumentBuilder()
    .setTitle('API gestion des équipes de football')
    .setDescription("La description de l'API de gestion des équipes de football")
    .setVersion('1.0')
    .build();
    
  // Création du document Swagger à partir de la configuration
  // et de l'application NestJS.
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  // Permet de définir le port d'écoute de l'application
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
