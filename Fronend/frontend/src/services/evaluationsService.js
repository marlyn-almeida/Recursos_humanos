// EvaluationsService.js
const API_URL = "/api/evaluations";  // URL del API Gateway en la máquina virtual
const API_URL_PORT  = "http://172.190.36.62:8084//api/evaluations";
// Obtener todas las evaluaciones
const getEvaluations = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(API_URL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,  // Se mantiene el Bearer
        },
    });

    if (!response.ok) throw new Error("Error obteniendo evaluaciones");
    return response.json();
};

// Obtener evaluaciones por ID de empleado
const getEvaluationsByEmployeeId = async (employeeId) => {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_URL}/${employeeId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,  // Se mantiene el Bearer
        },
    });

    if (!response.ok) throw new Error("Error obteniendo evaluaciones del empleado");
    return response.json();
};

// Agregar una nueva evaluación
const addEvaluation = async (evaluation) => {
    const { employeeId, rating, comment } = evaluation;
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_URL}/${employeeId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,  // Se mantiene el Bearer
        },
        body: JSON.stringify({
            score: rating, // 'rating' ahora es 'score' para coincidir con el backend
            comments: comment, // 'comment' ahora es 'comments' según el backend
        }),
    });

    if (!response.ok) throw new Error("Error agregando evaluación");
    return response.json();
};

export { getEvaluations, getEvaluationsByEmployeeId, addEvaluation };
