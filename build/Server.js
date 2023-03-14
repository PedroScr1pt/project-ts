"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = __importDefault(require("./routes"));
const middleware_1 = require("./middleware");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = config_1.default.server_port || "3000";
    }
    use() {
        this.app.use(middleware_1.logs);
        this.app.use(middleware_1.database);
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use(routes_1.default);
        this.app.use((err, req, res, next) => {
            res.status(500).json({ error: err.message });
        });
    }
    listen() {
        this.app.listen(this.port, () => {
            try {
                console.log('server corriendo en', this.port);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.default = Server;
//# sourceMappingURL=Server.js.map