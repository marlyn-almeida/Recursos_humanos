// src/components/Sidebar.js
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <aside className="w-64 bg-gray-800 text-white h-screen p-5 fixed left-0 top-0">
            <h2 className="text-lg font-bold mb-5">Menu</h2>
            <ul>
                <li className="mb-2"><Link to="/employees">👤 Employees</Link></li>
                <li className="mb-2"><Link to="/attendance">📆 Attendance</Link></li>
                <li className="mb-2"><Link to="/evaluations">📊 Evaluations</Link></li>
                <li className="mb-2"><Link to="/notifications">🔔 Notifications</Link></li>
                <li className="mb-2"><Link to="/reports">📄 Reports</Link></li>
            </ul>
        </aside>
    );
};

export default Sidebar;
