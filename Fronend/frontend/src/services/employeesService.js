const API_URL = "http://localhost:8082/api/employees";

// Función para obtener el token correctamente
const getToken = () => {
    const token = localStorage.getItem("token");
    return token ? `Bearer ${token}` : null;
};

// Obtener empleados (GET)
export const getEmployees = async () => {
    try {
        const response = await fetch(API_URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": getToken()
            },
        });

        if (!response.ok) throw new Error("Error al obtener empleados");

        return await response.json();
    } catch (error) {
        console.error("Error en getEmployees:", error);
        throw error;
    }
};

// 🔹 Obtener un empleado por ID (GET)
export const getEmployeeById = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": getToken()
            },
        });

        if (!response.ok) throw new Error("Error al obtener empleado");

        return await response.json();
    } catch (error) {
        console.error("Error en getEmployeeById:", error);
        throw error;
    }
};

// Crear empleado (POST)
export const createEmployee = async (employee) => {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": getToken()
            },
            body: JSON.stringify(employee),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Error en POST: ${errorText}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error en createEmployee:", error);
        throw error;
    }
};

// Actualizar empleado (PUT)
export const updateEmployee = async (id, updatedEmployee) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": getToken()
            },
            body: JSON.stringify(updatedEmployee),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Error en PUT: ${errorText}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error en updateEmployee:", error);
        throw error;
    }
};

// Eliminar empleado (DELETE)
export const deleteEmployee = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": getToken()
            },
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Error en DELETE: ${errorText}`);
        }

        return { success: true, id };
    } catch (error) {
        console.error("Error en deleteEmployee:", error);
        throw error;
    }
};
