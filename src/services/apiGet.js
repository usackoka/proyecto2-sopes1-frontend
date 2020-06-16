import axios from "axios";
import { baseApi } from "../config/config";
import request from "request";

async function getApi(url) {
  let options={}
  options.headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const data = await axios.get(url, options, {});
  console.log("API_GET")
  console.dir(data)
  return data;
}

async function getApiRequest(url,fn){
  let options = {
    'method': 'GET',
    'url': url,
    'headers':{
      "Content-Type": "application/json",
      Accept: "application/json",
    }
  }

  await request(options,function (error, response) { 
    if (error) return fn(error);
    return fn(JSON.parse(response.body));
  });
}

const api = {
    generalData: {
      async getUsers(){
        return await getApi(baseApi+"users");
       },
      async getUsers2(fn){
        await getApiRequest(baseApi+"users",fn)
      }
    }
}
export default api;