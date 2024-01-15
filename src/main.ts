import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidateInputPipe } from './core/pipes/validate.pipe';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    session({
      secret: 'BilboBaggins',
      resave: false,
      saveUninitialized: false,
    }),)
  app.use(passport.initialize())
  app.use(passport.session())


  app.enableCors({
    credentials: true,
    origin: ['http://localhost:3001', 'https://loft-furniture-frontend.onrender.com']
  })

  const config = new DocumentBuilder()
    .setTitle('Furniture shop')
    .setDescription('Api Documentation')
    .setVersion('1.0')
    .addTag('API')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('swagger', app, document)

  /*app.useGlobalPipes(new ValidateInputPipe());*/
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
