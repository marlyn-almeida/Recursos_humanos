import { useEffect, useState } from "react";
import { getEmployees } from "../services/employeesService";
import { getEvaluationsByEmployeeId } from "../services/evaluationsService";
import { getAttendanceByEmployee } from "../services/attendanceService";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

const Reports = () => {
    const [reports, setReports] = useState([]);

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
                            evaluations,
                            attendance,
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

    const generatePDF = (employee, averageScore, evaluations, attendance) => {
        const doc = new jsPDF();

        // Encabezado del reporte
        doc.setFillColor(0, 102, 204);
        doc.rect(10, 10, 190, 20, "F");
        doc.setFont("helvetica", "bold");
        doc.setFontSize(18);
        doc.setTextColor(255, 255, 255);
        doc.text("Reporte de Evaluación", 105, 22, { align: "center" });

        // Datos del empleado
        doc.setFontSize(12);
        doc.setTextColor(50, 50, 50);
        doc.text(`Empleado: ${employee.firstName} ${employee.lastName}`, 20, 40);

        // Mostrar el promedio numérico en el PDF (sin estrellas)
        doc.text(`Evaluación Promedio: ${averageScore}`, 20, 50);

        // Mostrar la asistencia total de días en el PDF
        const totalAttendanceDays = attendance.length;
        doc.text(`Asistencia Total: ${totalAttendanceDays} días`, 20, 60);

        // Tabla de asistencia
        autoTable(doc, {
            startY: 80,
            head: [["Fecha de Asistencia"]],
            body: attendance.map(att => [att.date]),
            styles: { fontSize: 10 },
            headStyles: { fillColor: [100, 100, 255] },
        });

        // Tabla de evaluaciones (con comentarios)
        autoTable(doc, {
            startY: doc.lastAutoTable.finalY + 10,
            head: [["Fecha", "Puntuación", "Comentario"]],
            body: evaluations.map(evaluation => [
                evaluation.date,
                evaluation.score,
                evaluation.comments || "N/A"
            ]),
            styles: { fontSize: 10 },
        });

        doc.save(`Reporte_${employee.firstName}_${employee.lastName}.pdf`);
    };

    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold mb-4">Reportes de Empleados</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reports.map(({ employee, averageScore, evaluations, attendance }) => (
                    <div key={employee.id} className="p-5 border rounded-lg shadow-lg bg-white">
                        <h2 className="text-xl font-semibold mb-2">
                            {employee.firstName} {employee.lastName}
                        </h2>

                        {/* Mostrar las estrellas en la interfaz web */}
                        <p className="text-gray-700"><strong>Evaluación Promedio:</strong> { "★".repeat(Math.round(averageScore)) || "N/A"}</p>

                        {/* Mostrar asistencia total en la interfaz web */}
                        <p className="text-gray-700"><strong>Asistencia Total:</strong> {attendance.length} días</p>

                        {/* Botón dentro del recuadro del empleado */}
                        <button
                            onClick={() => generatePDF(employee, averageScore, evaluations, attendance)}
                            className="mt-3 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded w-full"
                        >
                            📄 Generar Reporte PDF
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reports;
