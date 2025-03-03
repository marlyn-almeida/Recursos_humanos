import { useEffect, useState } from "react";
import { getAttendance } from "../services/attendanceService";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Attendance = () => {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAttendance();
            setRecords(data);
        };
        fetchData();
    }, []);

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 p-5">
                <Navbar />
                <h1 className="text-2xl font-bold mb-4">Attendance Records</h1>
                <ul>
                    {records.map((rec) => (
                        <li key={rec.id} className="border p-3 rounded mb-2">
                            {rec.employee} - {rec.date} - {rec.status}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Attendance;
