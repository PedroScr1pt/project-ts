import { db } from '../data-access';
import { logger } from '../middleware/logs';

export async function database(req: any, _: any, next: any) {
  try {
    req.db = db(req.headers.database || 'dacodes');
    next();
  } catch (err) {
    logger.error('database', { error: err });
    next(err);
  }
}
