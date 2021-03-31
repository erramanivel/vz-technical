"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const account_controller_1 = require("../controller/account.controller");
const router = express_1.Router();
router.route('/v1/account/balance').get(account_controller_1.getAccountBalance);
router.route('/v1/account/transactions').get(account_controller_1.getAccountTransactions);
router.route('/v1/account/transactions').post(account_controller_1.addTransaction);
router.route('/v1/account/transactions/:id').get(account_controller_1.findTransactionById);
exports.default = router;
//# sourceMappingURL=account.routes.js.map