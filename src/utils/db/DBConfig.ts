class DBConfig {
  private static instance: DBConfig;

  private type: string;
  private host: string;
  private port: number;
  private username: string;
  private password: string;
  private database: string;
  private entities: Array<unknown>;
  private synchronize: boolean;

  private constructor() {
    this.type = process.env.DB_TYPE;
    this.host = process.env.DB_HOST;
    this.port = Number(process.env.DB_PORT);
    this.username = process.env.DB_USERNAME;
    this.password = process.env.DB_PASSWORD;
    this.database = process.env.DATABASE;
    this.entities = [];
    this.synchronize = true;
  }

  private static getSingleton(): void {
    if (DBConfig.instance == null) {
      DBConfig.instance = new this();
    }
  }

  public static getInstance(): DBConfig {
    if (DBConfig.instance == null) DBConfig.getSingleton();
    return DBConfig.instance;
  }

  public pushToEntities(entity: unknown): void {
    this.entities.push(entity);
  }

  public changeSyncronize(): void {
    this.synchronize = this.synchronize ? false : true;
  }
}

export default DBConfig;
