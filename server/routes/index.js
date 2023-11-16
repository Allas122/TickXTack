"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addAllRoutes = void 0;
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const userRouter_1 = require("./userRouter");
const hubRouter_1 = require("./hubRouter");
exports.addAllRoutes = (0, fastify_plugin_1.default)(function (instance, opts, done) {
    instance.register(userRouter_1.addUserRoutes);
    instance.register(hubRouter_1.addHubRoutes);
    done();
});
