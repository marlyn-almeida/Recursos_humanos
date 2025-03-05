import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getEmployeeById } from "../services/employeesService";
import { registerAttendance } from "../services/attendanceService";
import Sidebar from "../components/Sidebar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const RegisterAttendance = () => {
    const { id } = useParams(); // Obtener ID del empleado desde la URL
    const [employee, setEmployee] = useState(null);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const navigate = useNavigate();

    // Cargar datos del empleado
    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const data = await getEmployeeById(id);
                setEmployee(data);
            } catch (error) {
                console.error("Error cargando empleado", error);
            }
        };
        fetchEmployee();
    }, [id]);

    // Manejar el registro de asistencia
    const handleRegister = async () => {
        try {
            await registerAttendance(id, selectedDate.toISOString().split("T")[0]);
            alert("Asistencia registrada correctamente");
            navigate("/attendance"); // 🔹 Redirigir a la lista de asistencias
        } catch (error) {
            console.error("Error registrando asistencia", error);
            alert("Hubo un problema al registrar la asistencia");
        }
    };

    if (!employee) return <p className="p-5 text-gray-500">Cargando empleado...</p>;

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 p-5">
                <h1 className="text-2xl font-bold mb-4">Registrar Asistencia</h1>
                <p className="text-lg font-semibold">{employee.name}</p>

                <div className="mt-4">
                    <label className="block mb-2 font-semibold">Selecciona la fecha:</label>
                    <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        className="border p-2 rounded w-full"
                    />
                </div>

                <button
                    onClick={handleRegister}
                    className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
                >
                    Guardar Asistencia
                </button>
            </div>
        </div>
    );
};

export default RegisterAttendance;
