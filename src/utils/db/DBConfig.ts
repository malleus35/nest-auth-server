import ModuleInfo from '../adapter/ModuleInfo';
import { TypeOrmModule } from '@nestjs/typeorm';

class DBConfig extends ModuleInfo {
  private constructor() {
    super();
    this.pushToImports(TypeOrmModule.forFeature());
  }
}

export default DBConfig;
