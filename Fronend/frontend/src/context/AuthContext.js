import { createContext, useContext, useState } from "react";

export const AuthContext = createContext(); // ✅ Asegúrate de exportar el contexto

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
