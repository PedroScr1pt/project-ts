"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logs = exports.logger = void 0;
const config_1 = __importDefault(require("../config"));
const bunyan_1 = __importDefault(require("bunyan"));
exports.logger = bunyan_1.default.createLogger({
    name: config_1.default.projectName || 'logs-anonymous',
});
function logs(req, _, next) {
    exports.logger.info('request', { requestId: req.path, method: req.method });
    req.logger = exports.logger;
    next();
}
exports.logs = logs;
//# sourceMappingURL=logs.js.map