"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const userModel_1 = require("../model/userModel");
class userService {
    static async registration(name) {
        return await userModel_1.userModel.create({ name });
    }
}
exports.userService = userService;
