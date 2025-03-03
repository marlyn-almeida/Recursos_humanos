import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Attendance from "./pages/Attendance";
import Evaluations from "./pages/Evaluations";
import Notifications from "./pages/Notifications";
import Reports from "./pages/Reports";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import "./styles/index.css";

function App() {
    return (
        <Router>
            <div className="flex">
                <Sidebar />
                <div className="flex-1">
                    <Navbar />
                    <main className="p-6">
                        <Routes>
                            <Route path="/" element={<Login />} />
                            <Route
                                path="/dashboard"
                                element={
                                    <ProtectedRoute>
                                        <Dashboard />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/employees"
                                element={
                                    <ProtectedRoute>
                                        <Employees />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/attendance"
                                element={
                                    <ProtectedRoute>
                                        <Attendance />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/evaluations"
                                element={
                                    <ProtectedRoute>
                                        <Evaluations />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/notifications"
                                element={
                                    <ProtectedRoute>
                                        <Notifications />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/reports"
                                element={
                                    <ProtectedRoute>
                                        <Reports />
                                    </ProtectedRoute>
                                }
                            />
                        </Routes>
                    </main>
                </div>
            </div>
        </Router>
    );
}

export default App;
