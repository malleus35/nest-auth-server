import Module from './Module';
import DBConfig from '../db/DBConfig';

class Config extends Module {
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
