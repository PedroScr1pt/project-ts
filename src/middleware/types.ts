import * as log from 'bunyan'
import { Request } from 'express'
import { PoolClient } from 'pg'
export interface BaseRequest extends Request {
    db: PoolClient;
    logger?: log;
}