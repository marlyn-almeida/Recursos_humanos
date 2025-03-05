import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Employees from "./pages/Employees";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";
import Attendance from "./pages/Attendance"; // ✅ Página de asistencia
import RegisterAttendance from "./pages/RegisterAttendance"; // ✅ Registrar asistencia
import Evaluation from "./pages/Evaluations"; // ✅ Página de evaluaciones
import AddEvaluation from "./pages/AddEvaluation"; // ✅ Agregar evaluación
import Reports from "./pages/Reports"; // ✅ Nueva página de reportes
import Sidebar from "./components/Sidebar";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import { useAuth } from "./hooks/useAuth";

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    {/* Página principal, redirige a login si no hay sesión */}
                    <Route path="/" element={<NavigateToLogin />} />

                    {/* Rutas públicas */}
                    <Route path="/login" element={<RedirectIfAuthenticated><Login /></RedirectIfAuthenticated>} />
                    <Route path="/register" element={<RedirectIfAuthenticated><Register /></RedirectIfAuthenticated>} />

                    {/* Rutas protegidas con Sidebar */}
                    <Route path="/home" element={<ProtectedRoute><PageWithSidebar><Home /></PageWithSidebar></ProtectedRoute>} />
                    <Route path="/employees" element={<ProtectedRoute><PageWithSidebar><Employees /></PageWithSidebar></ProtectedRoute>} />
                    <Route path="/add-employee" element={<ProtectedRoute><PageWithSidebar><AddEmployee /></PageWithSidebar></ProtectedRoute>} />
                    <Route path="/edit-employee/:id" element={<ProtectedRoute><PageWithSidebar><EditEmployee /></PageWithSidebar></ProtectedRoute>} />
                    <Route path="/attendance" element={<ProtectedRoute><PageWithSidebar><Attendance /></PageWithSidebar></ProtectedRoute>} />
                    <Route path="/register-attendance/:employeeId" element={<ProtectedRoute><PageWithSidebar><RegisterAttendance /></PageWithSidebar></ProtectedRoute>} />

                    {/* 🔹 Nuevas rutas para Evaluaciones */}
                    <Route path="/evaluations" element={<ProtectedRoute><PageWithSidebar><Evaluation /></PageWithSidebar></ProtectedRoute>} />
                    <Route path="/add-evaluation/:employeeId" element={<ProtectedRoute><PageWithSidebar><AddEvaluation /></PageWithSidebar></ProtectedRoute>} />

                    {/* 🔹 Nueva ruta para Reportes */}
                    <Route path="/reports" element={<ProtectedRoute><PageWithSidebar><Reports /></PageWithSidebar></ProtectedRoute>} />

                    {/* Redirección de rutas desconocidas */}
                    <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

// 🔹 Redirigir a login si el usuario NO está autenticado
function NavigateToLogin() {
    const { token } = useAuth();

    if (!token) {
        localStorage.removeItem("token"); // ⚠️ Asegurar que no haya token inválido
        return <Navigate to="/login" />;
    }

    return <Navigate to="/home" />;
}

// 🔹 Evita que los usuarios autenticados vean login/register
function RedirectIfAuthenticated({ children }) {
    const { token } = useAuth();
    return token ? <Navigate to="/home" /> : children;
}

// 🔹 Layout con Sidebar para páginas protegidas
function PageWithSidebar({ children }) {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 p-5 ml-64">{children}</div>
        </div>
    );
}

export default App;
