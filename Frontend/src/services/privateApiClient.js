import axios from "axios";

const privateApiClient = axios.create({
   baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
});
// Add a request interceptor to dynamically include the latest token
privateApiClient.interceptors.request.use(
   (config) => {
      const token = JSON.parse(localStorage.getItem("token")); // Get the latest token from localStorage
      if (token) {
         config.headers.Authorization = `Bearer ${token}`; // Set Authorization header
      }
      return config;
   },
   (error) => {
      return Promise.reject(error); // Handle errors here if needed
   }
);
export default privateApiClient;
