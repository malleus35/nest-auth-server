import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import ORMConfig from './dto/ORMConfig';
import { User } from './users/user.entity';
import DBModuleInfo from './utils/adapter/db/DBModuleInfo';

ORMConfig.entities?.push(User);
const appModuleInfo = new DBModuleInfo();
appModuleInfo.pushOrmModuleForRoot(ORMConfig);
appModuleInfo.pushToControllers(AppController);
appModuleInfo.pushToProviders(AppService);
@Module(appModuleInfo)
export class AppModule {}
