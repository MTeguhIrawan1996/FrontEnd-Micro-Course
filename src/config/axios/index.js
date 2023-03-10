import axios from "axios";
import errorHandler from "./errorHandler";

const instance = axios.create({
  baseURL: "https://some-domain.com/api/",
});

instance.interceptors.response.use((response) => response.data, errorHandler);

export default instance;
