import api from "./api";

export const getNotifications = async () => {
    const response = await api.get("/notifications");
    return response.data;
};

export const markNotificationAsRead = async (id) => {
    await api.put(`/notifications/${id}/read`);
};
