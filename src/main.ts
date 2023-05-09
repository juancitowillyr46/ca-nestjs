import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './presentation/app/app.module';
import { ValidationPipe } from '@nestjs/common';
import { ResponseInterceptor } from './presentation/core/interceptors/response.interceptor';
import { HttpExceptionFilter } from './presentation/core/filters/http-exception.filter';

import { HttpAdapterHost } from '@nestjs/core';
import { AllExceptionsFilter } from './presentation/core/filters/error-handler-all-exception.filter';
import { ValidateExceptionFilter } from './presentation/core/filters/error-handler-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new ResponseInterceptor(new Reflector()));
  //app.useGlobalFilters(new HttpExceptionFilter());
  //const { httpAdapter } = app.get(HttpAdapterHost);
  //app.useGlobalFilters(new AllExceptionsFilter(app.get(HttpAdapterHost)));
  app.useGlobalFilters(new ValidateExceptionFilter(app.get(HttpAdapterHost)));
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
