import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { initRouter } from './routers';
import ui from './components/ui';
import {OhVueIcon} from "oh-vue-icons";
import {usersApi} from "./apiComponent.js";
import icons from "./icons.js"
const app = createApp(App)
ui.forEach((val)=>{
    app.component(val.name,val)
})
app.component("v-icon",OhVueIcon)
app.use(initRouter)
app.mount('#app')
