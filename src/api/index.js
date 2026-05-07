import axios from "axios";

const api = axios.create();

api.defaults.baseURL = 'http://localhost/api/';

export default api;