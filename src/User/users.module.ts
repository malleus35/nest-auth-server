import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './user.entity';
import DBModuleInfo from '../../utils/adapter/db/DBModuleInfo';

const UserModuleInfo = new DBModuleInfo();
UserModuleInfo.pushOrmModuleForFeature(User);
UserModuleInfo.pushToProviders(UsersService);
UserModuleInfo.pushToControllers(UsersController);

@Module(UserModuleInfo)
export class UsersModule {}
