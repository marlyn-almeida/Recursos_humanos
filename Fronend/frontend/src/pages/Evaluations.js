import { useEffect, useState } from "react";
import { getEmployees } from "../services/employeesService";
import { getEvaluationsByEmployeeId } from "../services/evaluationsService";
import { useNavigate } from "react-router-dom";

function Evaluations() {
    const [employees, setEmployees] = useState([]);
    const [selectedEvaluations, setSelectedEvaluations] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchEmployees() {
            try {
                const data = await getEmployees();
                setEmployees(data);
            } catch (error) {
                console.error("Error obteniendo empleados:", error);
            }
        }
        fetchEmployees();
    }, []);

    const handleViewEvaluations = async (employeeId) => {
        try {
            const evaluations = await getEvaluationsByEmployeeId(employeeId);
            setSelectedEvaluations((prev) => ({
                ...prev,
                [employeeId]: evaluations,
            }));
        } catch (error) {
            console.error("Error obteniendo evaluaciones:", error);
        }
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Evaluaciones</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {employees.map((employee) => (
                    <div key={employee.id} className="border p-4 rounded shadow">
                        <h2 className="text-xl font-semibold">
                            {employee.firstName} {employee.lastName}
                        </h2>
                        <button
                            onClick={() => navigate(`/add-evaluation/${employee.id}`)}
                            className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                        >
                            Evaluar
                        </button>
                        <button
                            onClick={() => handleViewEvaluations(employee.id)}
                            className="bg-green-500 text-white px-4 py-2 rounded mt-2 ml-2"
                        >
                            Ver Evaluaciones
                        </button>

                        {selectedEvaluations[employee.id] && (
                            <div className="mt-4">
                                <h3 className="text-lg font-semibold">Evaluaciones:</h3>
                                {selectedEvaluations[employee.id].map((evaluation) => (
                                    <p key={evaluation.id}>⭐ {evaluation.score} - {evaluation.comments}</p>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Evaluations;
