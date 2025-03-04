import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    {/* Página de Login y Registro accesibles para todos */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    {/* Home solo accesible si el usuario está autenticado */}
                    <Route path="/" element={<ProtectedRoute element={<Home />} />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
