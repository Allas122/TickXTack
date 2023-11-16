"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
require("./Config");
const routes_1 = require("./routes");
const plugins_1 = require("./plugins");
var server = (0, fastify_1.default)();
server.register(routes_1.addAllRoutes);
server.register(plugins_1.addAllPlugins);
server.listen({ port: global.config.PORT, host: global.config.HOST }, async (err, address) => {
    if (err) {
        throw err;
    }
    console.log(`server is started on ${address}`);
});
