"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addHubRoutes = void 0;
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const ServerRequestBodySchems_1 = require("../schems/ServerRequestBodySchems");
const hubController_1 = require("../controllers/hubController");
exports.addHubRoutes = (0, fastify_plugin_1.default)(function (instance, opts, done) {
    instance.post("/hub/create", { schema: { body: ServerRequestBodySchems_1.createServerRequestBodySchem } }, hubController_1.HubController.createServer);
    instance.get("/hub/getAllServers-s:skip", { schema: { params: ServerRequestBodySchems_1.getAllServersRequestBodySchem } }, hubController_1.HubController.getAllServers);
    done();
});
