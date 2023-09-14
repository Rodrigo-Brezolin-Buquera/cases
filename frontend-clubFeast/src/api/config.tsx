import axios from "axios";


const BASE_URL:string =  "https://api.themoviedb.org/3"
export const IMG_URL:string = "https://image.tmdb.org/t/p/w500"
export const API_KEY:string = "?api_key=d78080e21f707a22e22a145dc1bbf11b"

const api = axios.create({
    baseURL: BASE_URL
  });
  
export default api;

