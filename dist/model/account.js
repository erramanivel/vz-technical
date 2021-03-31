"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const transaction_1 = __importDefault(require("./transaction"));
class Account {
    constructor() {
        this.balance = 100;
        this.isLock = false;
        this.transactions = new Array();
    }
    static getInstance() {
        if (!Account.instance) {
            Account.instance = new Account();
        }
        return Account.instance;
    }
    getBalance() {
        return this.balance;
    }
    isAccountLock() {
        return this.isLock;
    }
    getTransactions() {
        return [...this.transactions];
    }
    changeAccountLock() {
        this.isLock = !this.isLock;
    }
    addTransaction(type, amount) {
        this.changeAccountLock();
        const transaction = new transaction_1.default(type, amount);
        if (type.toUpperCase() === 'CREDIT') {
            this.balance += amount;
        }
        else {
            this.balance -= amount;
        }
        this.transactions.push(transaction);
        this.changeAccountLock();
        return transaction;
    }
    isTransactionValid(type, amount) {
        if (type.toUpperCase() === 'DEBIT' && this.balance - amount < 0) {
            return false;
        }
        return true;
    }
}
exports.default = Account;
//# sourceMappingURL=account.js.map