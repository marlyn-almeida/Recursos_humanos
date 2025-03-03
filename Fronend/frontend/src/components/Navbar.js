// src/components/Navbar.js
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-blue-600 p-4 text-white flex justify-between items-center shadow-lg">
            <h1 className="text-xl font-bold">HR Management</h1>
            <div>
                <Link className="px-4" to="/employees">Employees</Link>
                <Link className="px-4" to="/attendance">Attendance</Link>
                <Link className="px-4" to="/evaluations">Evaluations</Link>
                <Link className="px-4" to="/notifications">Notifications</Link>
                <Link className="px-4" to="/reports">Reports</Link>
            </div>
        </nav>
    );
};

export default Navbar;
