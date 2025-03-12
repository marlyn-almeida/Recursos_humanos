// AttendanceService.js
const API_URL = "/api/attendance";  // URL del API Gateway en la máquina virtual
const API_URL_PORT  = "http://172.190.36.62:8083/api/atendence";
const getAttendanceByEmployee = async (employeeId) => {
    const token = localStorage.getItem("token"); // 🔹 Obtener el token almacenado
    const response = await fetch(`${API_URL}/${employeeId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,  // Añadido el "Bearer" antes del token
        },
    });
    if (!response.ok) throw new Error("Error obteniendo asistencia");
    return response.json();
};

const registerAttendance = async (employeeId, date) => {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_URL}/${employeeId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,  // Añadido el "Bearer" antes del token
        },
        body: JSON.stringify({ date }), // 🔹 Enviar la fecha en el body
    });

    if (!response.ok) throw new Error("Error registrando asistencia");
    return response.json();
};

export { getAttendanceByEmployee, registerAttendance };
