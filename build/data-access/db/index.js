"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const pg_1 = require("pg");
const config_1 = __importDefault(require("../../config"));
const middleware_1 = require("../../middleware");
const db = (database) => {
    try {
        const pool = new pg_1.Pool(Object.assign(Object.assign({}, config_1.default.database), { database: database || config_1.default.database.database }));
        const db = {
            query: (text, params) => {
                middleware_1.logger.info('executed query', text, params);
                return pool.query(text, params).catch(error => {
                    middleware_1.logger.error('error executing query', error);
                    throw error;
                });
            },
        };
        return db;
    }
    catch (error) {
        return error;
    }
};
exports.db = db;
//# sourceMappingURL=index.js.map