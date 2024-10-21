import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3333/api/v1", // Replace with your actual backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
