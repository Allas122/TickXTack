import {defineStore} from "pinia"

export const userStore = defineStore("user",{
    state:()=>{
        user:{
            name:"";
            id:"";
        };
        auth:{
            token:""
        }
    },
    getters:{
        getUserObject(state){
            return state.user
        }
    },
    actions:{
        registration(res){

        }
    }

})