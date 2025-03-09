import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useSidebar } from "../context/SidebarContext";
import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
    const navigate = useNavigate();
    const { isOpen } = useSidebar();
    const { logout, loading } = useAuth(); // Obtén también el estado de loading del contexto

    const handleLogout = () => {
        logout(); // Llama a logout
        navigate("/login"); // Redirige al login
    };

    // Si el contexto está cargando, no renderizamos el Navbar aún
    if (loading) return null; // O muestra algún cargando, si prefieres

    return (
        <nav
            className={`bg-gray-900 text-white p-4 flex justify-between items-center transition-all duration-300 ${
                isOpen ? "pl-64" : "pl-16"
            }`}
        >
            <h1 className="text-lg font-bold flex-1 text-center">
                Gestión de Recursos Humanos
            </h1>

            <div className="flex gap-3">
                <button
                    onClick={() => navigate(-1)}
                    className="bg-gray-700 px-3 py-2 rounded hover:bg-gray-600 flex items-center"
                >
                    <ArrowLeft size={20} className="mr-2" />
                    Atrás
                </button>

                <Link to="/home" className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
                    🏠 Home
                </Link>

                {/* Botón de Salir */}
                <button
                    onClick={handleLogout} // Llama a handleLogout para cerrar sesión
                    className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
                >
                    🚪 Salir
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
