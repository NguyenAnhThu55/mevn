import axios from "axios";
const url = "api/auth";

export default class auth{
    static async register(user){
        const res = await axios.post(`${url}/register`,user);
        return res.data; 
    }

    static async login(user){
        const res = await axios.post(`${url}/login`,user);
        return res.data
       
    }

    static async logout() {
        const res = await axios.get(`${url}/logout`);
    }

}