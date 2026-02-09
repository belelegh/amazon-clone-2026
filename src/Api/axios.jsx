import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-c5efd/us-central1/api", //Local Test url
  baseURL:
    "https://console.firebase.google.com/project/clone-c5efd/overview",
});

export { axiosInstance };
