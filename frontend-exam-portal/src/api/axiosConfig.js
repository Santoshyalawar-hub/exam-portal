// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: "http://localhost:8080/api", // your backend base URL
// });

// export default axiosInstance;

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:8080/api", // your backend base URL
  withCredentials: true, // CRITICAL: This enables sending cookies with requests
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds timeout
});

// Request interceptor for debugging
axiosInstance.interceptors.request.use(
  (config) => {
    console.log(`API Request: ${config.method.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
axiosInstance.interceptors.response.use(
  (response) => {
    console.log(`API Response: ${response.status} ${response.config.url}`);
    return response;
  },
  (error) => {
    if (error.response) {
      console.error(`Response Error: ${error.response.status} - ${error.response.data?.error || error.message}`);
      
      // Handle 401 Unauthorized (session expired)
      if (error.response.status === 401) {
        console.log('Session expired or unauthorized');
        // Optionally redirect to login
        // window.location.href = '/login';
      }
    } else if (error.request) {
      console.error('Network Error: No response received from server');
    } else {
      console.error('Error:', error.message);
    }
    
    return Promise.reject(error);
  }
);

export default axiosInstance;