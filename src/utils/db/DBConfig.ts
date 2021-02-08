class DBConfig {
  private static instance: DBConfig;

  private readonly type: string;
  private readonly host: string;
  private readonly port: number;
  private readonly username: string;
  private readonly password: string;
  private readonly database: string;
  private readonly entities: Array<unknown>;
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
