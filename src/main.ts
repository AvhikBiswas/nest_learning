import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const expressApp = app.getHttpAdapter().getInstance();
  expressApp.set('trust proxy', true);
  await app.listen(3000);
}
bootstrap();
