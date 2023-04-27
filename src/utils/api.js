import axios from "axios";
import { URI } from "./constant";

const api = axios.create({ baseURL: `${URI}/api` });

export default api;
