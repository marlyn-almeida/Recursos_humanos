import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createEmployee } from "../services/employeesService";

const AddEmployee = () => {
    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        email: "",
        position: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("Enviando datos:", employee); // 🔹 Depuración
            await createEmployee(employee);
            alert("Empleado agregado correctamente!"); // ✅ Confirmación visual
            //navigate("/employees");
        } catch (error) {
            console.error("Error al agregar empleado:", error);
            alert("Hubo un error al guardar el empleado.");
        }
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Agregar Empleado</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="block text-gray-700">Nombre</label>
                    <input
                        type="text"
                        name="firstName"
                        value={employee.firstName}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="block text-gray-700">Apellido</label>
                    <input
                        type="text"
                        name="lastName"
                        value={employee.lastName}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="block text-gray-700">Correo Electrónico</label>
                    <input
                        type="email"
                        name="email"
                        value={employee.email}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="block text-gray-700">Puesto</label>
                    <input
                        type="text"
                        name="position"
                        value={employee.position}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    Guardar
                </button>
            </form>
        </div>
    );
};

export default AddEmployee;
