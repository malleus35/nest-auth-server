export default () => ({
  port: parseInt(process.env.SERVER_PORT, 10) || 3000,
  database: {
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
  },
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
  jwt: {
    secretKey: process.env.JWT_SECRET_KEY,
    issuer: process.env.JWT_ISSUER,
    audience: process.env.JWT_AUDIENCE,
  },
});
