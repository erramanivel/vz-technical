import { Request } from 'express';

class ErrorHandler {
    private static instance: ErrorHandler;

    private constructor() {}

    public static getInstance(): ErrorHandler{
        if(!ErrorHandler.instance){
            ErrorHandler.instance = new ErrorHandler();
        }
        return ErrorHandler.instance;
    }

    public buildResponseError(errorCode: number, errorMessage: string) {
        let response = {
            code: errorCode,
            message: errorMessage 
        };
        return response;
    }
}

export default ErrorHandler;