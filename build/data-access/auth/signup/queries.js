"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INSERT_SIGNUP_USER = void 0;
exports.INSERT_SIGNUP_USER = `
  INSERT INTO
    users (name,email,password,user_rol,"createdAt","updatedAt")
  VALUES
    ($1,$2,$3,$4,$5,$6)
  RETURNING
    id`;
//# sourceMappingURL=queries.js.map