import axios from "axios";
const url = "/contact";

export default class APC {
    // to get all the post from the serve
    static async getAllContact(){
        const res = await axios.get(url);
        return res.data;
    }

     // to get single post by ID
     static async getContactByID(id){
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    }

    // to insert post into database
    static async addContact(contact){
        const res = await axios.post(url,contact);
        return res.data;
    }
   

    // to update post into database
    static async updateContact(id,contact){
        const res = await axios.patch(`${url}/${id}`,contact);
        return res.data;
    }

     // to Delete post by ID
     static async deleteContacts(id){
        const res = await axios.delete(`${url}/${id}`);
        return res.data;
    }

}