"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const account_1 = __importDefault(require("../model/account"));
class AccountService {
    constructor() {
        this.account = account_1.default.getInstance();
    }
    static getInstance() {
        if (!AccountService.instance) {
            AccountService.instance = new AccountService();
        }
        return AccountService.instance;
    }
    getAccountBalance() {
        if (!this.account.isAccountLock()) {
            return {
                "balance": this.account.getBalance(),
            };
        }
        throw new Error("Error getting balance");
    }
    getAccountTransactions() {
        if (!this.account.isAccountLock()) {
            return this.account.getTransactions();
        }
        throw new Error("Error getting transactions");
    }
    createAccountTransaction(transactionRequest) {
        if (this.account.isAccountLock()) {
            throw new Error("409");
        }
        if (!this.account.isTransactionValid(transactionRequest.type, transactionRequest.amount)) {
            throw new Error("422");
        }
        return this.account.addTransaction(transactionRequest.type, transactionRequest.amount);
    }
    findTransactionById(uuid) {
        if (this.account.isAccountLock()) {
            throw new Error("409");
        }
        return this.account.getTransactions().filter(t => uuid === t.getId());
    }
}
exports.default = AccountService;
//# sourceMappingURL=account.service.js.map