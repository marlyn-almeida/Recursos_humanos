import { useEffect, useState } from "react";
import { getEmployees } from "../services/employeesService";
import { useEvaluationsService } from "../services/evaluationsService";
import { getAttendanceByEmployee } from "../services/attendanceService";

const Reports = () => {
    const [reports, setReports] = useState([]);
    const { getEvaluationsByEmployeeId } = useEvaluationsService(); // Usamos el hook para obtener evaluaciones

    useEffect(() => {
        const fetchReports = async () => {
            try {
                const employees = await getEmployees();

                const reportsData = await Promise.all(
                    employees.map(async (employee) => {
                        const evaluations = await getEvaluationsByEmployeeId(employee.id);
                        const attendance = await getAttendanceByEmployee(employee.id);

                        const averageScore = evaluations.length > 0
                            ? (evaluations.reduce((sum, evalItem) => sum + evalItem.score, 0) / evaluations.length).toFixed(1)
                            : "N/A";

                        return {
                            employee,
                            averageScore,
                            attendanceCount: attendance.length,
                        };
                    })
                );

                setReports(reportsData);
            } catch (error) {
                console.error("Error obteniendo reportes:", error);
            }
        };

        fetchReports();
    }, []);

    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold mb-4">Reportes de Empleados</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reports.map(({ employee, averageScore, attendanceCount }) => (
                    <div key={employee.id} className="p-5 border rounded-lg shadow-lg bg-white">
                        <h2 className="text-xl font-semibold mb-2">
                            {employee.firstName} {employee.lastName}
                        </h2>
                        <p className="text-gray-700"><strong>Evaluación Promedio:</strong> ⭐ {averageScore}</p>
                        <p className="text-gray-700"><strong>Asistencia Total:</strong> {attendanceCount} días</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reports;
