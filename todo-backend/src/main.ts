import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './util/http-exception.filter';
import { TransformInterceptor } from './util/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new TransformInterceptor())
  const configService = app.get(ConfigService);
  const port = configService.get<number>('AppConfig.port');
  await app.listen(port);
}
bootstrap();
