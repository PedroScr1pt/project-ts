"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const v1_1 = __importDefault(require("./v1/"));
const middleware_1 = require("../middleware");
const router = express_1.default.Router();
router.use('/v1/', v1_1.default);
router.use('*', (req, res) => {
    middleware_1.logger.error(`Route not found: ${req.originalUrl}`);
    middleware_1.logger.error(`Method: ${req.method}`);
    middleware_1.logger.error(`Body: ${JSON.stringify(req.body)}`);
    res.status(404).json({ code: 404, message: 'Not Found' });
});
exports.default = router;
//# sourceMappingURL=index.js.map