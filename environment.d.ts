// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { string } from "joi";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT:string;
      PROJECT_NAME: string;
      DB_HOST: string;
      DB_USERNAME: string;
      DB_PASSWORD: string;
      DB_NAME: string;
      DB_PORT: string;
      JWT_SECRET:string;
    }
  }
}
export {};
