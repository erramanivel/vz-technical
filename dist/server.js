"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const app_1 = require("./config/app");
const app = new app_1.App();
exports.server = app.getServer();
//# sourceMappingURL=server.js.map