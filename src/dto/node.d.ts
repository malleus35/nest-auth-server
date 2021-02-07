declare namespace NodeJS {
  interface ProcessEnv {
    SERVER_PORT: string;

    DATABASE: string;
    DB_USERNAME: string;
    DB_PASSWORD: string;
    DB_HOST: string;
    DB_PORT: string;
    DB_DIALECT: string;

    REDIS_HOST: string;
    REDIS_PORT: string;

    JWT_SECRET_KEY: string;
    JWT_ISSUER: string;
    JWT_AUDIENCE: string;
  }
}
