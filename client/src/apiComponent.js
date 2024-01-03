import {ApiClient, UsersApi} from "./api/index.js";
const api = new ApiClient("http://localhost:8080")
export default {
    install(app,opt){
        app.config.globalProperties.$Api = {}
        app.config.globalProperties.$Api.UsersApi=new UsersApi(api)
    }
}
export const usersApi = new UsersApi(api)