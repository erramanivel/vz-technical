"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const account_routes_1 = __importDefault(require("../routes/account.routes"));
const swaggerDocument = __importStar(require("./swagger.json"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const settings_1 = require("./settings");
class App {
    constructor(port) {
        this.port = port;
        this.app = express_1.default();
        this.settings();
        this.initializeRoutes();
        this.listen();
    }
    settings() {
        this.app.set('port', this.port || process.env.PORT || 8000);
        this.app.use(express_1.default.json());
        this.app.use(cors_1.default());
        this.app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
    }
    listen() {
        if (process.env.NODE_ENV !== 'test') {
            return this.app.listen(this.app.get('port'), () => {
                console.log(`Server on env: ${settings_1.ENV} listening on port ${this.app.get('port')}`);
            });
        }
    }
    getServer() {
        return this.app;
    }
    initializeRoutes() {
        this.app.get('/', (req, res) => {
            res.json('Ok, server up and running');
        });
        this.app.use('/api/', account_routes_1.default);
        this.app.get('*', (request, response) => {
            response.status(400).send("Page not found!");
        });
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map