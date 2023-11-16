"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HubController = void 0;
const serverService_1 = require("../services/serverService");
const userModel_1 = require("../model/userModel");
class HubController {
    static async createServer(request, reply) {
        var { name, password, creatorId } = request.body;
        if (await userModel_1.userModel.exists({ _id: creatorId })) {
            return serverService_1.ServerService.creareServer(name, creatorId, password);
        }
        else {
            return reply.code(400).send("User not found");
        }
    }
    static async getAllServers(request, reply) {
        return serverService_1.ServerService.getAllServices(request.params.skip);
    }
}
exports.HubController = HubController;
