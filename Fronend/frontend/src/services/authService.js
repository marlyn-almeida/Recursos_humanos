import axios from "axios";

export const login = (credentials) => axios.post("/api/auth/login", credentials);
export const logout = () => localStorage.removeItem("token");
