import { useEffect, useState } from "react";
import { getReports } from "../services/reportsService";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Reports = () => {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getReports();
            setReports(data);
        };
        fetchData();
    }, []);

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 p-5">
                <Navbar />
                <h1 className="text-2xl font-bold mb-4">Reports</h1>
                <ul>
                    {reports.map((rep) => (
                        <li key={rep.id} className="border p-3 rounded mb-2">
                            {rep.title} - {rep.date}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Reports;
