import { useEffect, useState } from "react";
import { getEmployees } from "../services/employeesService";
import { getAttendanceByEmployee, registerAttendance } from "../services/attendanceService";
import Sidebar from "../components/Sidebar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Attendance = () => {
    const [employees, setEmployees] = useState([]);
    const [attendance, setAttendance] = useState({});
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    useEffect(() => {
        const fetchEmployeesAndAttendance = async () => {
            try {
                const employeesData = await getEmployees();
                setEmployees(employeesData);

                const attendanceData = {};
                for (const emp of employeesData) {
                    const attData = await getAttendanceByEmployee(emp.id);
                    attendanceData[emp.id] = {
                        name: `${emp.firstName} ${emp.lastName}`, // ✅ Nombre correcto
                        records: attData
                    };
                }
                setAttendance(attendanceData);
            } catch (error) {
                console.error("Error al cargar empleados o asistencias:", error);
            }
        };

        fetchEmployeesAndAttendance();
    }, []);

    const handleRegisterAttendance = async () => {
        if (!selectedEmployee) return;

        try {
            const newRecord = { date: selectedDate.toISOString().split("T")[0] };
            await registerAttendance(selectedEmployee.id, newRecord.date);

            setAttendance((prev) => ({
                ...prev,
                [selectedEmployee.id]: {
                    name: `${selectedEmployee.firstName} ${selectedEmployee.lastName}`, // ✅ Nombre correcto
                    records: [...(prev[selectedEmployee.id]?.records || []), newRecord]
                }
            }));

            setSelectedEmployee(null);
        } catch (error) {
            console.error("Error registrando asistencia", error);
        }
    };

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 p-5">
                <h1 className="text-2xl font-bold mb-4">Registro de Asistencia</h1>

                <ul>
                    {employees.map((emp) => {
                        const empAttendance = attendance[emp.id] || { name: `${emp.firstName} ${emp.lastName}`, records: [] };
                        return (
                            <li key={emp.id} className="border p-3 rounded mb-2">
                                <p className="font-bold text-lg">{`${emp.firstName} ${emp.lastName}`}</p> {/* ✅ Nombre correcto */}
                                <p className="text-sm text-gray-600">Asistencias:</p>
                                <ul>
                                    {empAttendance.records.length > 0 ? (
                                        empAttendance.records.map((att, index) => (
                                            <li key={index} className="text-green-600">{att.date}</li>
                                        ))
                                    ) : (
                                        <li className="text-gray-400">Sin asistencias registradas</li>
                                    )}
                                </ul>
                                <button
                                    onClick={() => setSelectedEmployee(emp)}
                                    className="bg-blue-500 text-white px-3 py-1 mt-2 rounded transition-transform transform hover:scale-105"
                                >
                                    Agregar Asistencia
                                </button>
                            </li>
                        );
                    })}
                </ul>

                {selectedEmployee && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-5 rounded shadow-lg">
                            <h2 className="text-xl font-bold mb-3">Registrar Asistencia para {`${selectedEmployee.firstName} ${selectedEmployee.lastName}`}</h2>
                            <DatePicker
                                selected={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                                className="border p-2 rounded w-full"
                            />
                            <div className="flex justify-end mt-3">
                                <button
                                    onClick={handleRegisterAttendance}
                                    className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                                >
                                    Guardar
                                </button>
                                <button
                                    onClick={() => setSelectedEmployee(null)}
                                    className="bg-red-500 text-white px-4 py-2 rounded"
                                >
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Attendance;
