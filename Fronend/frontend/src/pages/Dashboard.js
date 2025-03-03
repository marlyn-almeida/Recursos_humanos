import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import AnimatedCard from "../components/AnimatedCard";

const Dashboard = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 p-5">
                <Navbar />
                <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
                <div className="grid grid-cols-3 gap-4">
                    <AnimatedCard title="Employees" content="Manage employees" />
                    <AnimatedCard title="Attendance" content="Track attendance" />
                    <AnimatedCard title="Evaluations" content="Performance reviews" />
                    <AnimatedCard title="Notifications" content="Real-time alerts" />
                    <AnimatedCard title="Reports" content="Download analytics" />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
