"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.Connection = mongoose_1.default.createConnection(global.config.MONGO_CONNECTION);
