import { useEffect, useState } from "react";
import { getEmployees } from "../services/employeesService";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Employees = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getEmployees();
            setEmployees(data);
        };
        fetchData();
    }, []);

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 p-5">
                <Navbar />
                <h1 className="text-2xl font-bold mb-4">Employees</h1>
                <ul>
                    {employees.map((emp) => (
                        <li key={emp.id} className="border p-3 rounded mb-2">
                            {emp.name} - {emp.position}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Employees;
