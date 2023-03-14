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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signin = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const data_access_1 = require("../../../data-access");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { db, body } = req;
    const email = body.email;
    const password = body.password;
    const usersid = yield (0, data_access_1.validateUser)(db, email);
    if (!usersid) {
        return res.status(400).json({ success: false, msg: 'El usuario no existe' });
    }
    if (!bcrypt_1.default.compareSync(password, usersid.password)) {
        return res.status(400).json({ success: false, msg: 'El usuario no existe' });
    }
    const token = jsonwebtoken_1.default.sign({ _id: usersid }, process.env.JWT_SECRET || 'local');
    return res.status(200).json({ success: true, token });
});
exports.signin = signin;
//# sourceMappingURL=postSignIn.js.map