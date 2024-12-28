import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ZodValidationPipe, ZodValidationException } from "nestjs-zod";
import { ZodExceptionFilter } from "./common/filters/zod.filter";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Register ZodValidationPipe globally
  app.useGlobalPipes(new ZodValidationPipe());

  // Register ZodExceptionFilter globally
  app.useGlobalFilters(new ZodExceptionFilter());

  await app.listen(3000);
}
bootstrap();
