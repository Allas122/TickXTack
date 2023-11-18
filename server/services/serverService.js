"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerService = void 0;
const argon2_1 = require("argon2");
const serverPlane_1 = require("../model/serverPlane");
class ServerService {
    static async creareServer(name, creatorId, password) {
        if (password) {
            password = await (0, argon2_1.hash)(password);
        }
        var server = await serverPlane_1.serverPlaneModel.create({ name, creatorId, password });
        return server;
    }
    static async getAllServices(skip) {
        var server = await serverPlane_1.serverPlaneModel.find({}, {}, { sort: { 'created_at': -1 }, skip, limit: 8 });
        return server;
    }
}
exports.ServerService = ServerService;
