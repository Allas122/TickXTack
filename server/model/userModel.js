"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const mongoDB_1 = require("../mongoDB");
const mongoose_1 = require("mongoose");
const crypto_1 = require("crypto");
const userSchem = new mongoose_1.Schema({
    _id: {
        type: mongoose_1.Schema.Types.UUID,
        default: () => (0, crypto_1.randomUUID)()
    },
    name: {
        type: mongoose_1.Schema.Types.String,
        unique: true
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now
    }
});
exports.userModel = mongoDB_1.Connection.model("user", userSchem);
