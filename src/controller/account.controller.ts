import { Request, Response } from 'express';
import ErrorHandler from '../util/error-handler';
import AccountService from '../service/account.service';

export const getAccountBalance = async (request: Request, response: Response): Promise<any> => {
    const accountService = AccountService.getInstance();
    try {
        response.json(accountService.getAccountBalance());
    } catch (e) {
        console.error("Error trying to get customers " + e.message);
        response.status(500);
        response.json(ErrorHandler
            .getInstance().buildResponseError(500, "There was an error trying to get the customers"));
    }
}