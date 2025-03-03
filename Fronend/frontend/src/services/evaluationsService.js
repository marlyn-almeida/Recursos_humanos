import api from "./api";

export const getEvaluations = async () => {
    const response = await api.get("/evaluations");
    return response.data;
};

export const createEvaluation = async (evaluationData) => {
    const response = await api.post("/evaluations", evaluationData);
    return response.data;
};
