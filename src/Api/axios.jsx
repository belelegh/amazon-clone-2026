import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-app-2018/us-central1/api", //Local Test url
  baseURL:
    "https://console.firebase.google.com/project/clone-app-2018/overview",
});

export { axiosInstance };
