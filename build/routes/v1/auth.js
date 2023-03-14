"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const controllers_1 = require("../../controllers");
router.post('/signup', controllers_1.signup);
router.post('/signin', controllers_1.signin);
exports.default = router;
//# sourceMappingURL=auth.js.map