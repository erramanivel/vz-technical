"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorHandler {
    constructor() { }
    static getInstance() {
        if (!ErrorHandler.instance) {
            ErrorHandler.instance = new ErrorHandler();
        }
        return ErrorHandler.instance;
    }
    buildResponseError(errorCode, errorMessage) {
        let response = {
            code: errorCode,
            message: errorMessage
        };
        return response;
    }
}
exports.default = ErrorHandler;
//# sourceMappingURL=error-handler.js.map