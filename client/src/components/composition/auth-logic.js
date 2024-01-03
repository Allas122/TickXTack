import {ref} from "vue"
import {useRouter} from "vue-router";
import axios from "axios";
export function GetCode() {
    let route = useRouter()
    route.currentRoute.value.query
    return route.currentRoute.value.query;
}
export async function GetUserAuth(code){
    const data = {
        'grant_type': 'authorization_code',
        'code': code,
        'scope': 'identify',
    }
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    const res = await axios.post("https://discord.com/api/oauth2/token",data,{headers})
    console.log(res.data)
}



