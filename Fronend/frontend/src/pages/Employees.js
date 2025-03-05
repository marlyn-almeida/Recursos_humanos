import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Importar useNavigate
import { getEmployees, deleteEmployee } from "../services/employeesService";
import Sidebar from "../components/Sidebar";

const Employees = () => {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate(); // ✅ Hook para navegar

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getEmployees();
                setEmployees(data);
            } catch (error) {
                console.error("Error al cargar empleados:", error);
            }
        };
        fetchData();
    }, []);

    const handleDeleteEmployee = async (id) => {
        if (window.confirm("¿Estás seguro de eliminar este empleado?")) {
            try {
                await deleteEmployee(id);
                setEmployees(employees.filter(emp => emp.id !== id));
            } catch (error) {
                console.error("Error al eliminar empleado:", error);
            }
        }
    };

    const handleEditEmployee = (id) => {
        navigate(`/edit-employee/${id}`); // ✅ Redirigir a la página de edición
    };

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 p-5">
                <h1 className="text-2xl font-bold mb-4">Empleados</h1>

                {/* ✅ Botón que redirige a la página de agregar empleado */}
                <button
                    className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={() => navigate("/add-employee")} // ✅ Redirección
                >
                    ➕ Agregar Empleado
                </button>

                <div className="grid grid-cols-3 gap-4">
                    {employees.map((emp) => (
                        <div key={emp.id} className="border p-5 rounded-lg shadow bg-white">
                            <h2 className="text-lg font-bold">{emp.firstName} {emp.lastName}</h2>
                            <p>{emp.position}</p>
                            <p className="text-sm text-gray-500">{emp.email}</p>

                            {/* ✅ Botón de Editar */}
                            <button
                                className="mt-2 px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 mr-2"
                                onClick={() => handleEditEmployee(emp.id)}
                            >
                                ✏️ Editar
                            </button>

                            {/* ✅ Botón de Eliminar */}
                            <button
                                className="mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                onClick={() => handleDeleteEmployee(emp.id)}
                            >
                                🗑 Eliminar
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Employees;
