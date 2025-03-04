import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
    const { token } = useAuth(); // ✅ Asegura que use el token correctamente

    return token ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
