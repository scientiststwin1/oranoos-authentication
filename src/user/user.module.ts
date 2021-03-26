import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './repository/user.repository';
import { RoleRepository } from './repository/role.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserRepository,
      RoleRepository
    ])
  ],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
