import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useSidebar } from "../context/SidebarContext";

const Sidebar = () => {
    const { isOpen, setIsOpen } = useSidebar();

    // Manejadores para abrir y cerrar el sidebar con el mouse
    const handleMouseEnter = () => setIsOpen(true);  // Abrir sidebar cuando el mouse entra
    const handleMouseLeave = () => setIsOpen(false); // Cerrar sidebar cuando el mouse sale

    // Función para alternar el sidebar con el botón de hamburguesa
    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <aside
            className={`fixed left-0 top-0 h-screen bg-gray-800 text-white shadow-lg transition-all duration-300 ${
                isOpen ? "w-64" : "w-16"
            }`}
            onMouseEnter={handleMouseEnter}   // Abrir sidebar cuando el mouse entra
            onMouseLeave={handleMouseLeave}   // Cerrar sidebar cuando el mouse sale
        >
            {/* Botón de menú */}
            <button
                className="absolute top-4 left-4 bg-gray-700 p-2 rounded-md"
                onClick={toggleSidebar}  // Cambiar estado al hacer clic en el botón
            >
                <Menu size={24} />
            </button>

            {/* Menú */}
            <ul className="mt-16 space-y-4">
                <li>
                    <Link to="/employees" className="block px-4 py-2 hover:bg-gray-700">
                        👤 {isOpen && "Employees"}
                    </Link>
                </li>
                <li>
                    <Link to="/attendance" className="block px-4 py-2 hover:bg-gray-700">
                        📆 {isOpen && "Attendance"}
                    </Link>
                </li>
                <li>
                    <Link to="/evaluations" className="block px-4 py-2 hover:bg-gray-700">
                        📊 {isOpen && "Evaluations"}
                    </Link>
                </li>
                <li>
                    <Link to="/reports" className="block px-4 py-2 hover:bg-gray-700">
                        📄 {isOpen && "Reports"}
                    </Link>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
