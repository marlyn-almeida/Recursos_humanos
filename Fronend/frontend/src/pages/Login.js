import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        // Simulación de autenticación
        if (email === "admin@example.com" && password === "password") {
            localStorage.setItem("token", "mock-jwt-token");
            navigate("/dashboard");
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <div className="flex h-screen items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                <form onSubmit={handleLogin} className="flex flex-col">
                    <input
                        type="email" placeholder="Email"
                        value={email} onChange={(e) => setEmail(e.target.value)}
                        className="p-2 border rounded mb-2"
                    />
                    <input
                        type="password" placeholder="Password"
                        value={password} onChange={(e) => setPassword(e.target.value)}
                        className="p-2 border rounded mb-4"
                    />
                    <button className="bg-blue-500 text-white p-2 rounded">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
