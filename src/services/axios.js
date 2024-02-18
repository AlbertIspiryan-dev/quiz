import axios from "axios";
axios.defaults.baseURL = "https://opentdb.com";
axios.defaults.timeout = 5000;
export default axios;
