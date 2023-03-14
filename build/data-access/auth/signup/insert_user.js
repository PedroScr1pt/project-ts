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
exports.saveSignupUser = void 0;
const queries_1 = require("./queries");
function saveSignupUser(db, users) {
    return __awaiter(this, void 0, void 0, function* () {
        const { rows } = yield db.query(queries_1.INSERT_SIGNUP_USER, [
            users.name,
            users.email,
            users.password,
            users.user_rol,
            new Date(),
            new Date()
        ]);
        return rows[0];
    });
}
exports.saveSignupUser = saveSignupUser;
//# sourceMappingURL=insert_user.js.map