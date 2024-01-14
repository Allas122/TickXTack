import * as process from "process";

export default ()=>({
    PORT:process.env.PORT||8080,
    DS_CLIENT_ID:process.env.DS_CLIENT_ID,
    DS_SECRET:process.env.DS_SECRET,
    IP:process.env.IP,
    EMAIL_HOST: process.env.EMAIL_HOST
})