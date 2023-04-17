import Utils from "./helper";
import axios from "axios";

export default axios.create({
  baseURL: Utils.API_URL,
  headers: {
    "Content-type": "application/json",
  },
});
