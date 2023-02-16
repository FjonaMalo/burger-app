import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-app-react-c4dae-default-rtdb.firebaseio.com/",
});

export default instance;
