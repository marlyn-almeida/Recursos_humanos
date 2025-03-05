import api from "../api";

export const fetchReports = async () => {
    try {
        // Obtener empleados
        const employeesResponse = await api.get("/employees");
        const employees = employeesResponse.data;

        // Obtener evaluaciones
        const evaluationsResponse = await api.get("/evaluations");
        const evaluations = evaluationsResponse.data;

        // Obtener asistencia
        const attendanceResponse = await api.get("/attendance");
        const attendance = attendanceResponse.data;

        // Unir la información
        const reports = employees.map(employee => {
            const employeeEvaluations = evaluations.filter(e => e.employeeId === employee.id);
            const employeeAttendance = attendance.filter(a => a.employeeId === employee.id);

            return {
                employee,
                evaluations: employeeEvaluations,
                attendance: employeeAttendance
            };
        });

        return reports;
    } catch (error) {
        console.error("Error fetching reports:", error);
        return [];
    }
};
