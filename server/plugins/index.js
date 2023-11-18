"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addAllPlugins = void 0;
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
exports.addAllPlugins = (0, fastify_plugin_1.default)(function (instance, opts, done) {
    instance.register(require("@fastify/cors"));
    instance.register(require("@fastify/formbody"));
    done();
});
