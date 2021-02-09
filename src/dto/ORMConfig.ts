import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const ORMConfig: TypeOrmModuleOptions = {
  type: process.env.DB_TYPE || 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  entities: [],
  synchronize: true,
  logging: true,
};

export default ORMConfig;
