import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import validation from './config/configs.schema'
import RabbitMQConfig from "./config/rabbitmq.config";

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: validation,
      load: [RabbitMQConfig]
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
