import { Pool } from 'pg';
import config from '../../config';
import { logger } from '../../middleware';

export const db = (database: string) => {
  try {
    const pool = new Pool({
      ...config.database,
      database: database || config.database.database,
    });
    const db = {
      query: (text: string, params: any) => {
        logger.info('executed query', text, params);
        return pool.query(text, params).catch(error => {
          logger.error('error executing query', error);
          throw error;
        });
      },
    };
    return db;
  } catch (error) {
    return error;
  }
};
