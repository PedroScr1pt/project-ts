import 'dotenv/config';
interface Config {
  projectName: string;
  server_port:string;
  database: {
    host: string;
    user: string;
    password: string;
    database: string;
    max:number;
    idleTimeoutMillis: number;
    connectionTimeoutMillis: number;
    port: number;
  };
}
const config: Config = {
  projectName: process.env.PROJECT_NAME,
  server_port:process.env.PORT,
  database: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'postgres',
    max: 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
    port:  5433,
  },
};
export default config;
