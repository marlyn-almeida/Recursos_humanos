// AuthContext.js
import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const savedToken = localStorage.getItem("token");

        if (savedToken) {
            // Verificar si el token es válido
            if (savedToken.startsWith("Bearer")) {
                setToken(savedToken);
            } else {
                console.warn("Token inválido, eliminando...");
                logout(); // Forzar logout si el token es inválido
            }
        }

        setLoading(false);
    }, []);

    const login = async (email, password) => {
        try {
            const response = await fetch("http://localhost:8081/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) return false;

            const data = await response.json();
            setToken(data.token);
            localStorage.setItem("token", data.token);
            return true;
        } catch (error) {
            console.error("Error en login:", error);
            return false;
        }
    };

    const register = async (email, password) => {
        try {
            const response = await fetch("http://localhost:8081/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }), // Aquí estamos enviando el correo y la contraseña
            });

            if (!response.ok) {
                return false; // Si la respuesta no es exitosa, regresamos false
            }

            return true; // Si todo va bien, retornamos true
        } catch (error) {
            console.error("Error en registro:", error);
            return false;
        }
    };

    const logout = () => {
        setToken(null);
        localStorage.removeItem("token");
    };

    return (
        <AuthContext.Provider value={{ token, login, register, logout, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
