import { Request, Response } from 'express';
import ErrorHandler from '../util/error-handler';
import AccountService from '../service/account.service';
import { validate as uuidValidate } from 'uuid';

const accountService = AccountService.getInstance();

const validateTransactionRequest = function(request: Request): boolean{
    if(!request.body){
        return false;
    }
    if(!request.body.type || !(request.body.type.toUpperCase() === 'CREDIT' || request.body.type.toUpperCase() === 'DEBIT')){
       return false;
    }
    if(!request.body.amount || request.body.amount <= 0){
        return false;
    }
    return true;
}

const validateTransactionIdRequest = function(request: Request): boolean{
    if(!request.body){
        return false;
    }
    if(!request.params.id || uuidValidate(request.params.id)){
        return false;
    }
    return true;
}


export const getAccountBalance = async (request: Request, response: Response): Promise<any> => {
    try {
        response.json(accountService.getAccountBalance());
    } catch (e) {
        console.error("Error trying to get balance " + e.message);
        response.status(409);
        response.json(ErrorHandler
            .getInstance().buildResponseError(409, "There was an error trying to get balance"));
    }

    
}

export const addTransaction = async (request: Request, response: Response): Promise<any> => {
    try {
        if(validateTransactionRequest(request)){
            response.status(201);
            response.json(accountService.createAccountTransaction(request.body));
        }else{
            response.status(400);
        response.json(ErrorHandler
            .getInstance().buildResponseError(400, "Invalid request"));
        }
    } catch (e) {
        console.error("Error trying to get transactions history " + e.message);
        response.status(e.message);
        response.json(ErrorHandler
            .getInstance().buildResponseError(e.message, "There was an error in the input."));
    }
}

export const getAccountTransactions = async (request: Request, response: Response): Promise<any> => {
    try {
            response.json(accountService.getAccountTransactions());
    } catch (e) {
        console.error("Error trying to get transactions history " + e.message);
        response.status(409);
        response.json(ErrorHandler
            .getInstance().buildResponseError(409, "There was an error trying to get transactions history"));
    }
}

export const findTransactionById = (request: Request, response: Response) => {
    try {
        if(validateTransactionIdRequest(request)){
        response.status(400);
        response.json(ErrorHandler
            .getInstance().buildResponseError(400, "Invalid ID format"));
        }
        const transaction = accountService.findTransactionById(request.params.id);
        if(Array.isArray(transaction) && transaction.length > 0){
            return response.json(transaction[0]);
        }
        response.status(404)
        return response.json(ErrorHandler
            .getInstance().buildResponseError(404, "Transaction not found"));
    } catch (e) {
        console.error("Error trying to get transactions history " + e.message);
        response.status(409);
        response.json(ErrorHandler
        .getInstance().buildResponseError(409, "There was an error trying to get transactions history"));
    }
}