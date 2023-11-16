"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registrationRequestBodySchem = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.registrationRequestBodySchem = typebox_1.Type.Object({
    password: typebox_1.Type.String(),
    name: typebox_1.Type.String()
});
