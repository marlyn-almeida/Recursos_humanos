import { useEffect, useState } from "react";
import { getNotifications } from "../services/notificationsService";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Notifications = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getNotifications();
            setNotifications(data);
        };
        fetchData();
    }, []);

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 p-5">
                <Navbar />
                <h1 className="text-2xl font-bold mb-4">Notifications</h1>
                <ul>
                    {notifications.map((notif) => (
                        <li key={notif.id} className="border p-3 rounded mb-2">
                            {notif.message} - {notif.date}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Notifications;
