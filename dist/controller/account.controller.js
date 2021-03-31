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
exports.findTransactionById = exports.getAccountTransactions = exports.addTransaction = exports.getAccountBalance = void 0;
const error_handler_1 = __importDefault(require("../util/error-handler"));
const account_service_1 = __importDefault(require("../service/account.service"));
const uuid_1 = require("uuid");
const accountService = account_service_1.default.getInstance();
const validateTransactionRequest = function (request) {
    if (!request.body) {
        return false;
    }
    if (!request.body.type || !(request.body.type.toUpperCase() === 'CREDIT' || request.body.type.toUpperCase() === 'DEBIT')) {
        return false;
    }
    if (!request.body.amount || request.body.amount <= 0) {
        return false;
    }
    return true;
};
const validateTransactionIdRequest = function (request) {
    if (!request.body) {
        return false;
    }
    if (!request.params.id || uuid_1.validate(request.params.id)) {
        return false;
    }
    return true;
};
const getAccountBalance = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        response.json(accountService.getAccountBalance());
    }
    catch (e) {
        console.error("Error trying to get balance " + e.message);
        response.status(409);
        response.json(error_handler_1.default
            .getInstance().buildResponseError(409, "There was an error trying to get balance"));
    }
});
exports.getAccountBalance = getAccountBalance;
const addTransaction = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (validateTransactionRequest(request)) {
            response.status(201);
            response.json(accountService.createAccountTransaction(request.body));
        }
        else {
            response.status(400);
            response.json(error_handler_1.default
                .getInstance().buildResponseError(400, "Invalid request"));
        }
    }
    catch (e) {
        console.error("Error trying to get transactions history " + e.message);
        response.status(e.message);
        response.json(error_handler_1.default
            .getInstance().buildResponseError(e.message, "There was an error in the input."));
    }
});
exports.addTransaction = addTransaction;
const getAccountTransactions = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        response.json(accountService.getAccountTransactions());
    }
    catch (e) {
        console.error("Error trying to get transactions history " + e.message);
        response.status(409);
        response.json(error_handler_1.default
            .getInstance().buildResponseError(409, "There was an error trying to get transactions history"));
    }
});
exports.getAccountTransactions = getAccountTransactions;
const findTransactionById = (request, response) => {
    try {
        if (validateTransactionIdRequest(request)) {
            response.status(400);
            response.json(error_handler_1.default
                .getInstance().buildResponseError(400, "Invalid ID format"));
        }
        const transaction = accountService.findTransactionById(request.params.id);
        if (Array.isArray(transaction) && transaction.length > 0) {
            return response.json(transaction[0]);
        }
        response.status(404);
        return response.json(error_handler_1.default
            .getInstance().buildResponseError(404, "Transaction not found"));
    }
    catch (e) {
        console.error("Error trying to get transactions history " + e.message);
        response.status(409);
        response.json(error_handler_1.default
            .getInstance().buildResponseError(409, "There was an error trying to get transactions history"));
    }
};
exports.findTransactionById = findTransactionById;
//# sourceMappingURL=account.controller.js.map