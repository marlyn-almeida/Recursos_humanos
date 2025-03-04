import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext"; // ✅ Asegúrate de que esta ruta sea correcta
import { useAuth } from "./hooks/useAuth"; // ✅ También verifica esta ruta

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<NavigateToLogin />} />
                    <Route path="/login" element={<RedirectIfAuthenticated><Login /></RedirectIfAuthenticated>} />
                    <Route path="/register" element={<RedirectIfAuthenticated><Register /></RedirectIfAuthenticated>} />
                    <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
                    <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

function NavigateToLogin() {
    const { token } = useAuth(); // ✅ Cambiado de isAuthenticated a token
    return token ? <Navigate to="/home" /> : <Navigate to="/login" />;
}

function RedirectIfAuthenticated({ children }) {
    const { token } = useAuth(); // ✅ Cambiado de isAuthenticated a token
    return token ? <Navigate to="/home" /> : children;
}

export default App;
