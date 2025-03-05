package com.demo.evaluation.service;

import com.demo.evaluation.model.Evaluation;
import com.demo.evaluation.repository.EvaluationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class EvaluationService {

    @Autowired
    private EvaluationRepository evaluationRepository;

    // Obtener todas las evaluaciones
    public List<Evaluation> getAllEvaluations() {
        return evaluationRepository.findAll();
    }

    // Obtener evaluaciones por empleado
    public List<Evaluation> getEvaluationsByEmployeeId(Long employeeId) {
        return evaluationRepository.findByEmployeeId(employeeId);
    }

    // Registrar evaluación con fecha automática
    public Evaluation registerEvaluation(Long employeeId, int score, String comments) {
        Evaluation evaluation = Evaluation.builder()
                .employeeId(employeeId)
                .score(score)
                .comments(comments)
                .date(LocalDate.now()) // ✅ Fecha de hoy por defecto
                .build();
        return evaluationRepository.save(evaluation);
    }
}