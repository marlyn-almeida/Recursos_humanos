import api from "./api";

export const getReports = async () => {
    const response = await api.get("/reports");
    return response.data;
};

export const downloadReport = async (type) => {
    const response = await api.get(`/reports/download?format=${type}`, {
        responseType: "blob",
    });
    return response.data;
};
