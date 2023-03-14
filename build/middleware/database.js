"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
const data_access_1 = require("../data-access");
const logs_1 = require("../middleware/logs");
function database(req, _, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            req.db = (0, data_access_1.db)(req.headers.database || 'dacodes');
            next();
        }
        catch (err) {
            logs_1.logger.error('database', { error: err });
            next(err);
        }
    });
}
exports.database = database;
//# sourceMappingURL=database.js.map