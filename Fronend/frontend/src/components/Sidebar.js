import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useSidebar } from "../context/SidebarContext";

const Sidebar = () => {
    const { isOpen, setIsOpen } = useSidebar();

    return (
        <aside
            className={`fixed left-0 top-0 h-screen bg-gray-800 text-white shadow-lg transition-all duration-300 ${
                isOpen ? "w-64" : "w-16"
            }`}
        >
            {/* Botón de menú */}
            <button
                className="absolute top-4 left-4 bg-gray-700 p-2 rounded-md"
                onClick={() => setIsOpen(!isOpen)}
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
