import axios from "axios";

// base URL to append to requests 🌈
const instance = axios.create({
  baseURL: `https://api.themoviedb.org/3`,
});

export default instance;
