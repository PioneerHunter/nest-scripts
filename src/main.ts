import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 配置 Swagger
  const config = new DocumentBuilder()
    .setTitle('脚本库 API')
    .setDescription('脚本库接口文档')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);

  const port = process.env.PORT ?? 3000;
  console.log(`\n🚀 脚本库已启动！访问地址: http://localhost:${port}`);
  console.log(`📚 Swagger 文档: http://localhost:${port}/api`);
}
bootstrap();
