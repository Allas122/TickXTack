import {createRouter, createWebHistory} from "vue-router"
import main from "../views/main.vue"
import auth from "../views/auth.vue"
import profile from "../views/profile.vue"
export const initRouter = createRouter({
    routes:[
        {path:"/",component:main},
        {path:"/auth",component:auth},
        {path:"/profile",component:profile}
    ],
    history:createWebHistory()
})

