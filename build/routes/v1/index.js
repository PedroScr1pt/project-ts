"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middleware_1 = require("../../middleware");
const auth_1 = __importDefault(require("./auth"));
const article_1 = __importDefault(require("./article"));
const document_1 = __importDefault(require("./document"));
const router = express_1.default.Router();
router.use('/', middleware_1.database, auth_1.default);
router.use('/article', middleware_1.database, article_1.default);
router.use('/document', document_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map