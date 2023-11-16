import { Connection } from "../mongoDB";
import {Schema } from "mongoose";
import { randomUUID } from "crypto";

export interface serverPlane{
    creatorId: string,
    name:string,
}


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

const serverPlaneSchema =new Schema({
    _id:{
        type:Schema.Types.UUID,
        default:() => randomUUID()
    },
    name:{
        type:String
    },
    password:{
        type:String,
        default:null
    },
    players:{
        type:Number,
        default:1
    },
    creatorId:{
        type:Schema.Types.UUID,
        ref:"user",    
    },
    created_at:{
        type: Date,
        required: true,
        default: Date.now 
    }
})
export const serverPlaneModel = Connection.model("ServerPlane",serverPlaneSchema)



