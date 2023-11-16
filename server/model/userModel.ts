import { Connection } from "../mongoDB";
import { Model, Schema } from "mongoose";
import { randomUUID } from "crypto";


const userSchem =new Schema({
    _id:{
        type:Schema.Types.UUID,
        default:() => randomUUID()
    },
    name:{
        type:Schema.Types.String,
        unique:true
    },
    created_at:{
        type: Date,
        required: true,
        default: Date.now 
    }
})

export const userModel = Connection.model("user",userSchem)