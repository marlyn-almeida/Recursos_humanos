// AuthContext.js
import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const savedToken = localStorage.getItem("token");

        if (savedToken) {
            setToken(savedToken);
        }

        setLoading(false);
    }, []);

    const login = async (email, password) => {
        try {
            const response = await fetch("http://172.190.36.62:8081/api/auth/login", {
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
            const response = await fetch("http://172.190.36.62:8081/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                return false;
            }

            return true;
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
