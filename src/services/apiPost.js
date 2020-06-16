import axios from "axios";
import { baseApi } from "../config/config";

async function getApi(url, body={}) {
  let options={}
  options.headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const data = await axios({method: "post",headers:options.headers,url: url,data: body});
  console.log("API_POST")
  console.dir(data)
  return data;
}

const api = {
    generalData: {
      async setUser(body){
        return await getApi(baseApi+"users",body);
       }
    }
}
export default api;