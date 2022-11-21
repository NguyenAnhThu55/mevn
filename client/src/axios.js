import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/";
// mock.onPost(`${process.env.process.env.BASE_URL}/register`, data)
axios.defaults.headers.common['Authorization'] =  'Bearer ' + localStorage.getItem("token");