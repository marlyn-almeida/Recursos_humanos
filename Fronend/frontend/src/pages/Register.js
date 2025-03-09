import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"; // Asegúrate de que el hook esté importado correctamente

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const { register } = useAuth(); // Obtener la función de registro desde useAuth
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); // Limpiar errores anteriores

        // Intentamos registrar al usuario
        const success = await register(email, password); // Usamos la función register aquí
        if (success) {
            navigate("/home"); // Redirigir a Home si el registro fue exitoso
        } else {
            setError("Error al registrar. Intenta con otro email."); // Mostrar mensaje de error si el registro falla
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
                <h2 className="text-2xl mb-4">Registro</h2>

                {error && <p className="text-red-500">{error}</p>}

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border rounded mb-2"
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border rounded mb-2"
                />
                <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">
                    Registrarse
                </button>
            </form>
        </div>
    );
};

export default Register;
