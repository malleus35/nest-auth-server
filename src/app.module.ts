import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import ORMConfig from './dto/ORMConfig';
import { User } from './User/user.entity';
import DBModuleInfo from './utils/adapter/db/DBModuleInfo';

const appModuleInfo = new DBModuleInfo();
ORMConfig.entities?.push(User);
appModuleInfo.pushOrmModuleForRoot(ORMConfig);
appModuleInfo.pushToControllers(AppController);
appModuleInfo.pushToProviders(AppService);
@Module(appModuleInfo)
export class AppModule {}
