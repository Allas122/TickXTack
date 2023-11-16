import axios from "axios";
class hubApi{
    static instance =axios.create({baseURL:"http://127.0.0.1:8080/hub"}) 
    static getServerList(stateAttr,skip){
        return this.instance.get(`/getAllServers-s${skip}`).then((res)=>{
            stateAttr = res
        }
        )
    }
}

export default hubApi