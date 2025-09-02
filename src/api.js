// FILE: api.js

import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3001/api",
});

// Intercepteur pour attacher le token si besoin
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;