import axios from "axios";
import { baseApi } from "../config/config";

async function getApi(url, body={}) {
  let options={}
  options.headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  options.params = body;

  return await axios.get(url, options, {});
}

const api = {
  generalData: {
    async getCasos() {
      return await getApi(baseApi + "caso/list");
    }
  }
};

export default api;