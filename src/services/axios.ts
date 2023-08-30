
import axios from "axios";

export  function  setupAPIClient()  {
  const api = axios.create({ 
    baseURL: "https://api.openweathermap.org",
  });


  return api;
}
export const api =  setupAPIClient();