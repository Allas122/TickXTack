"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServerRequestBodySchem = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.createServerRequestBodySchem = typebox_1.Type.Object({
    creatorId: typebox_1.Type.String({ format: "uuid" }),
    name: typebox_1.Type.String(),
    password: typebox_1.Type.Optional(typebox_1.Type.String()),
});
