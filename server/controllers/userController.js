"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const userService_1 = require("../services/userService");
class UserController {
    static async registration(request, reply) {
        try {
            const user = await userService_1.userService.registration(request.body.name);
            return "OK!";
        }
        catch (e) {
            switch (e.code) {
                case (11000):
                    return reply.send("name is already exist.");
            }
        }
    }
    static async login(request, reply) {
    }
}
exports.UserController = UserController;
