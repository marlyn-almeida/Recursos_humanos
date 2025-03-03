import api from "./api";
import { getAttendanceRecords } from "../services/attendanceService";

export const getAttendanceRecords = async () => {
    const response = await api.get("/attendance");
    return response.data;
};

export const registerAttendance = async (attendanceData) => {
    const response = await api.post("/attendance", attendanceData);
    return response.data;
};
