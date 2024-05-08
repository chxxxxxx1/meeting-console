import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const pipe = new ValidationPipe(); // 添加教研pipe
  app.useGlobalPipes(pipe);
  await app.listen(3000);
}
bootstrap();
