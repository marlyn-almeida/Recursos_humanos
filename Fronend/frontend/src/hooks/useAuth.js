import { useContext } from "react";
import AuthContext from "../context/AuthContext"; // Ajusta la ruta según tu estructura

export const useAuth = () => useContext(AuthContext);
