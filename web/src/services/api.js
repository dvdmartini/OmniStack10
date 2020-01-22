import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.8.36.nip.io:3333" //localhost:3333
});

export default api;
