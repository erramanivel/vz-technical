"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Transaction {
    constructor(type, amount) {
        this.type = this.validateType(type);
        this.amount = amount;
        this.id = uuid_1.v4();
        this.effectiveDate = new Date().toISOString();
    }
    validateType(type) {
        if (type && (type.toUpperCase() === 'CREDIT' || type.toUpperCase() === 'DEBIT')) {
            return type;
        }
        else {
            throw new Error("Invalid type of transaction");
        }
    }
    getId() {
        return this.id;
    }
}
exports.default = Transaction;
//# sourceMappingURL=transaction.js.map