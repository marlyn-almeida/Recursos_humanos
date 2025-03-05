import { useState } from "react";
import { addEvaluation } from "../services/evaluationsService";
import { useNavigate, useParams } from "react-router-dom";

const AddEvaluation = () => {
    const { employeeId } = useParams();
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0); // Para resaltar estrellas temporalmente
    const [comment, setComment] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault(); // 📌 Evitar el comportamiento por defecto del formulario
        try {
            const evaluationData = {
                employeeId: parseInt(employeeId, 10), // Asegurar que sea un número
                rating,
                comment,
            };

            console.log("Enviando evaluación:", evaluationData); // 📌 Verificar en consola

            await addEvaluation(evaluationData);
            alert("Evaluación guardada correctamente");
            navigate("/evaluations"); // 🔹 Redirigir a la lista de evaluaciones
        } catch (error) {
            console.error("Error al guardar evaluación", error);
            alert("Hubo un problema al guardar la evaluación");
        }
    };

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Evaluar Empleado</h2>
            <form onSubmit={handleRegister}>  {/* 🔹 Cambié handleSubmit a handleRegister */}
                <label className="block font-semibold mb-2">Calificación:</label>
                <div className="flex mb-3">
                    {[1, 2, 3, 4, 5].map((num) => (
                        <span
                            key={num}
                            className={`cursor-pointer text-2xl ${num <= (hover || rating) ? "text-yellow-500" : "text-gray-300"}`}
                            onClick={() => setRating(num)} // Actualiza el rating real
                            onMouseEnter={() => setHover(num)} // Resalta estrellas al pasar el mouse
                            onMouseLeave={() => setHover(0)} // Restablece si no se selecciona
                        >
                            ★
                        </span>
                    ))}
                </div>
                <label className="block font-semibold mb-2">Comentario:</label>
                <textarea
                    className="w-full p-2 border rounded mb-3"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                ></textarea>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                    Guardar Evaluación
                </button>
            </form>
        </div>
    );
};

export default AddEvaluation;
