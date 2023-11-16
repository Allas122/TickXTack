"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverPlaneModel = void 0;
const mongoDB_1 = require("../mongoDB");
const mongoose_1 = require("mongoose");
const crypto_1 = require("crypto");
// export class serverState{
//     id:string;
//     places = [
//         ["0","0","0"],
//         ["0","0","0"],
//         ["0","0","0"]
//     ],
//     round=0
//     apponent= [-1,1][Math.floor(Math.random()*2)].toString()
//     scores= {X:0,O:0}
// }
const serverPlaneSchema = new mongoose_1.Schema({
    _id: {
        type: mongoose_1.Schema.Types.UUID,
        default: () => (0, crypto_1.randomUUID)()
    },
    name: {
        type: String
    },
    password: {
        type: String,
        default: null
    },
    players: {
        type: Number,
        default: 1
    },
    creatorId: {
        type: mongoose_1.Schema.Types.UUID,
        ref: "user",
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now
    }
});
exports.serverPlaneModel = mongoDB_1.Connection.model("ServerPlane", serverPlaneSchema);
