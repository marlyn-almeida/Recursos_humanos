import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <aside className="w-64 bg-gray-800 text-white h-screen p-5 fixed left-0 top-0">
            <h2 className="text-lg font-bold mb-5">Menú</h2>
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
                    <Link to="/notifications" className="hover:text-gray-300">🔔 Notifications</Link>
                </li>
                <li className="mb-2">
                    <Link to="/reports" className="hover:text-gray-300">📄 Reports</Link>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
