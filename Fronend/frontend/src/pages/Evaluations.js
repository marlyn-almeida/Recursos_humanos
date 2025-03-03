import { useEffect, useState } from "react";
import { getEvaluations } from "../services/evaluationsService";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Evaluations = () => {
    const [evaluations, setEvaluations] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getEvaluations();
            setEvaluations(data);
        };
        fetchData();
    }, []);

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 p-5">
                <Navbar />
                <h1 className="text-2xl font-bold mb-4">Employee Evaluations</h1>
                <ul>
                    {evaluations.map((evaluation) => (
                        <li key={evaluation.id} className="border p-3 rounded mb-2">
                            {evaluation.employee} - Score: {evaluation.score}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Evaluations;
