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
exports.signup = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const data_access_1 = require("../../../data-access");
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { db, body } = req;
    body.password = bcrypt_1.default.hashSync(body.password, bcrypt_1.default.genSaltSync());
    const users = {
        name: body === null || body === void 0 ? void 0 : body.name,
        email: body === null || body === void 0 ? void 0 : body.email,
        password: body === null || body === void 0 ? void 0 : body.password,
        user_rol: body === null || body === void 0 ? void 0 : body.user_rol
    };
    const usersId = yield (0, data_access_1.saveSignupUser)(db, users);
    const token = jsonwebtoken_1.default.sign({ _id: usersId }, process.env.JWT_SECRET || 'local');
    res.json({ response: true, token });
});
exports.signup = signup;
//# sourceMappingURL=postSignUp.js.map