import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-1eef6.firebaseio.com/"
});

export default instance;
