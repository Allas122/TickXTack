"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
require("dotenv/config");
class Config {
    HOST;
    PORT;
    JWT_KEY;
    MONGO_CONNECTION;
    constructor(HOST = "0.0.0.0", PORT = "8080", JWT_KEY, MONGO_CONNECTION) {
        this.HOST = HOST;
        this.PORT = parseInt(PORT);
        if (!JWT_KEY) {
            throw new Error("JWT_KEY is required parametr for .env");
        }
        if (!MONGO_CONNECTION) {
            throw new Error("MONGO_CONNECTION is required parametr for .env");
        }
        this.MONGO_CONNECTION = MONGO_CONNECTION;
        this.JWT_KEY = JWT_KEY;
    }
}
exports.Config = Config;
global.config = new Config(process.env.HOST, process.env.PORT, process.env.JWT_KEY, process.env.MONGO_CONNECTION);
