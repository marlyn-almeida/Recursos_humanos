import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getEmployees, updateEmployee } from "../services/employeesService";

const EditEmployee = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [employee, setEmployee] = useState({ firstName: "", lastName: "", position: "", email: "" });

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const employees = await getEmployees();
                const selectedEmployee = employees.find(emp => emp.id === parseInt(id));
                if (selectedEmployee) {
                    setEmployee(selectedEmployee);
                }
            } catch (error) {
                console.error("Error al obtener empleado:", error);
            }
        };

        fetchEmployee();
    }, [id]);

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateEmployee(id, employee);
            navigate("/employees"); // 🔹 Volver a la lista de empleados
        } catch (error) {
            console.error("Error al actualizar empleado:", error);
        }
    };

    return (
        <div className="p-5">
            <h2 className="text-2xl font-bold mb-4">Editar Empleado</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block">Nombre:</label>
                    <input type="text" name="firstName" value={employee.firstName} onChange={handleChange} className="border p-2 rounded w-full" required />
                </div>

                <div>
                    <label className="block">Apellido:</label>
                    <input type="text" name="lastName" value={employee.lastName} onChange={handleChange} className="border p-2 rounded w-full" required />
                </div>

                <div>
                    <label className="block">Puesto:</label>
                    <input type="text" name="position" value={employee.position} onChange={handleChange} className="border p-2 rounded w-full" required />
                </div>

                <div>
                    <label className="block">Email:</label>
                    <input type="email" name="email" value={employee.email} onChange={handleChange} className="border p-2 rounded w-full" required />
                </div>

                <div className="flex space-x-2">
                    <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                        Guardar Cambios
                    </button>
                    <button type="button" className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600" onClick={() => navigate("/employees")}>
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditEmployee;
