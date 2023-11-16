"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUserRoutes = void 0;
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const registrationRequestBodySchem_1 = require("../schems/registrationRequestBodySchem");
const userController_1 = require("../controllers/userController");
exports.addUserRoutes = (0, fastify_plugin_1.default)(function (instance, opts, done) {
    instance.post("/user/registration", { schema: { body: registrationRequestBodySchem_1.registrationRequestBodySchem } }, userController_1.UserController.registration);
    done();
});
