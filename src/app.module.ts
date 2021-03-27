import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

import validation from './config/configs.schema';
import RabbitMQConfig from "./config/rabbitmq.config";
import JwtSecretKey from "./config/jwt.config"

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: validation,
      load: [RabbitMQConfig, JwtSecretKey]
    }),
    UserModule
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
