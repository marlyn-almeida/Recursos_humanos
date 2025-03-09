import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Employees from "./pages/Employees";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";
import Attendance from "./pages/Attendance";
import RegisterAttendance from "./pages/RegisterAttendance";
import Evaluation from "./pages/Evaluations";
import AddEvaluation from "./pages/AddEvaluation";
import Reports from "./pages/Reports";
import Sidebar from "./components/Sidebar";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import { SidebarProvider, useSidebar } from "./context/SidebarContext"; // Importando useSidebar
import { useAuth } from "./hooks/useAuth";
import Navbar from "./components/Navbar";

function App() {
    return (
        <AuthProvider>
            <SidebarProvider>
                <Router>
                    <Routes>
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

                        {/* Rutas de Evaluaciones */}
                        <Route path="/evaluations" element={<ProtectedRoute><PageWithSidebar><Evaluation /></PageWithSidebar></ProtectedRoute>} />
                        <Route path="/add-evaluation/:employeeId" element={<ProtectedRoute><PageWithSidebar><AddEvaluation /></PageWithSidebar></ProtectedRoute>} />

                        {/* Rutas de Reportes */}
                        <Route path="/reports" element={<ProtectedRoute><PageWithSidebar><Reports /></PageWithSidebar></ProtectedRoute>} />

                        {/* Redirección de rutas desconocidas */}
                        <Route path="*" element={<Navigate to="/login" />} />
                    </Routes>
                </Router>
            </SidebarProvider>
        </AuthProvider>
    );
}

// 🔹 Redirige a login si el usuario NO está autenticado
function NavigateToLogin() {
    const { token } = useAuth();

    if (!token) {
        localStorage.removeItem("token");
        return <Navigate to="/login" />;
    }

    return <Navigate to="/home" />;
}

// 🔹 Evita que los usuarios autenticados vean login/register
function RedirectIfAuthenticated({ children }) {
    const { token } = useAuth();
    return token ? <Navigate to="/home" /> : children;
}

// 🔹 Layout con Sidebar y Navbar
function PageWithSidebar({ children }) {
    const { isOpen } = useSidebar(); // Ahora debería reconocer useSidebar

    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className={`flex-1 flex flex-col transition-all duration-300 ${isOpen ? "ml-64" : "ml-16"}`}>
                <Navbar />
                <div className="flex-1 p-5">{children}</div>
            </div>
        </div>
    );
}

export default App;
