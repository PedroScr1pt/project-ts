"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SELECT_USERS = void 0;
exports.SELECT_USERS = `
  SELECT
    email, password
  FROM
    users
  WHERE
    email = $1
`;
//# sourceMappingURL=queries.js.map