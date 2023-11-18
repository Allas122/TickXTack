import axios from "axios";
class hubApi{
    static instance =axios.create({baseURL:"http://127.0.0.1:8080/hub"}) 
    static async getServerList(skip){
        return await this.instance.get(`/getAllServers-s${skip}`)
    }
}

export default hubApi