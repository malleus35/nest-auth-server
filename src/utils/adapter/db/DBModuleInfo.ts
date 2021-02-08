import ModuleInfo from '../ModuleInfo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';

//TODO TypeOrmModule에서 원하는 데이터베이스에 따라서 선택적으로
class DBModuleInfo extends ModuleInfo {
  constructor() {
    super();
  }

  public pushOrmModuleForRoot(): void {
    this.pushToImports(TypeOrmModule.forRoot());
  }

  public pushOrmModuleForFeature(
    entity: EntityClassOrSchema,
    ...entities: EntityClassOrSchema[]
  ) {
    const entityArray: Array<EntityClassOrSchema> = [];
    entityArray.push(entity, ...entities);
    this.pushToImports(TypeOrmModule.forFeature(entityArray));
  }
}

export default DBModuleInfo;
