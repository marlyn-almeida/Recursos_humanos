const API_URL = "http://localhost:8084/api/evaluations";

// Obtener todas las evaluaciones
const getEvaluations = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(API_URL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) throw new Error("Error obteniendo evaluaciones");
    return response.json();
};

// Obtener evaluaciones por ID de empleado
const getEvaluationsByEmployeeId = async (employeeId) => {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_URL}/${employeeId}`, { // 🔹 Se corrige la URL
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) throw new Error("Error obteniendo evaluaciones del empleado");
    return response.json();
};

// Agregar una nueva evaluación
const addEvaluation = async (evaluation) => {
    const { employeeId, rating, comment } = evaluation;
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_URL}/${employeeId}`, { // 🔹 Agrega employeeId en la URL
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            score: rating, // 🔹 Cambié 'rating' por 'score' para coincidir con el backend
            comments: comment, // 🔹 'comment' debe coincidir con 'comments'
        }),
    });

    if (!response.ok) throw new Error("Error agregando evaluación");
    return response.json();
};

export { getEvaluations, getEvaluationsByEmployeeId, addEvaluation };


