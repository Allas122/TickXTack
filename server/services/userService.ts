import { userModel } from "../model/userModel";

export class userService{
    static async registration(name:string){
        return await userModel.create({name})
    }
}