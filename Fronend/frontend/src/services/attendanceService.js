// src/services/attendanceService.js

export const getAttendance = async () => {
    try {
        const response = await fetch("https://tu-api.com/attendance");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error obteniendo asistencia:", error);
        throw error;
    }
};

// También puedes exportar otras funciones aquí
export const getAttendanceRecords = async () => {
    try {
        const response = await fetch("https://tu-api.com/attendance/records");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error obteniendo registros de asistencia:", error);
        throw error;
    }
};
