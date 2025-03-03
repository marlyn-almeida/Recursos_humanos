import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between">
                <Link to="/" className="font-bold text-lg">HR System</Link>
                <div className="space-x-4">
                    <Link to="/employees">Employees</Link>
                    <Link to="/attendance">Attendance</Link>
                    <Link to="/reports">Reports</Link>
                    <Link to="/notifications">Notifications</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
