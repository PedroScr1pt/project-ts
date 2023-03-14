import config from '../config';
import bunyan from 'bunyan';

export const logger = bunyan.createLogger({
  name: config.projectName || 'logs-anonymous',
});

export function logs(req: any, _: any, next: any) {
  logger.info('request', { requestId: req.path, method: req.method });
  req.logger = logger;
  next();
}
