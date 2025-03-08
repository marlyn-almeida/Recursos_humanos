import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Íconos para abrir/cerrar

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Botón para abrir/cerrar el menú */}
            <button
                className="fixed top-4 left-4 bg-gray-800 text-white p-2 rounded-lg z-50"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Menú desplegable */}
            <aside
                className={`fixed left-0 top-0 h-screen bg-gray-800 text-white p-5 w-64 transition-transform duration-300 ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <h2 className="text-lg font-bold mb-5 p-2"> </h2>
                <ul>
                    <li className="mb-2">
                        <Link to="/employees" className="hover:text-gray-300">👤 Employees</Link>
                    </li>
                    <li className="mb-2">
                        <Link to="/attendance" className="hover:text-gray-300">📆 Attendance</Link>
                    </li>
                    <li className="mb-2">
                        <Link to="/evaluations" className="hover:text-gray-300">📊 Evaluations</Link>
                    </li>
                    <li className="mb-2">
                        <Link to="/reports" className="hover:text-gray-300">📄 Reports</Link>
                    </li>
                </ul>
            </aside>
        </>
    );
};

export default Sidebar;
