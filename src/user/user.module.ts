import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './repository/user.repository';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => config.get('jwt'),
      inject: [ConfigService]
    }),
    TypeOrmModule.forFeature([
      UserRepository,
    ])
  ],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
