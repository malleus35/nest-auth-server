import ModuleInfo from './ModuleInfo';
import DBConfig from '../db/DBConfig';

class Config extends ModuleInfo {
  private static instance: Config;
  private constructor() {
    super();
    this.pushToImports(DBConfig.getInstance());
  }

  public static getInstance(): Config {
    if (Config.instance == null) Config.getSingleton();
    return Config.instance;
  }

  private static getSingleton(): void {
    if (Config.instance == null) {
      Config.instance = new this();
    }
  }
}

export default Config;
