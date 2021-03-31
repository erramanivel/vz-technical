"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MERCHANT_ID = exports.OPEN_API_KEY = exports.ENV = void 0;
const ENVIRONMENTS = {
    stage: 'stage',
    prod: 'prod'
};
const ENV = process.env.ENV_TYPE || ENVIRONMENTS.stage;
exports.ENV = ENV;
const OPEN_API_KEY = process.env.OPEN_API_KEY;
exports.OPEN_API_KEY = OPEN_API_KEY;
const MERCHANT_ID = process.env.MERCHANT_ID;
exports.MERCHANT_ID = MERCHANT_ID;
//# sourceMappingURL=settings.js.map