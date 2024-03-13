import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_DB_URL,
  timeout: 3000,
  timeoutErrorMessage: "to low internet connection plase try letter!"
})


export default instance