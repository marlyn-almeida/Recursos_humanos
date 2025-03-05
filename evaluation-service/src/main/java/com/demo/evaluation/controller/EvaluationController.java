package com.demo.evaluation.controller;

import com.demo.evaluation.model.Evaluation;
import com.demo.evaluation.service.EvaluationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/evaluations")
public class EvaluationController {

    @Autowired
    private EvaluationService evaluationService;

    // Obtener todas las evaluaciones
    @GetMapping
    public List<Evaluation> getAllEvaluations() {
        return evaluationService.getAllEvaluations();
    }

    // Obtener las evaluaciones de un empleado por ID
    @GetMapping("/{employeeId}")
    public List<Evaluation> getEvaluationsByEmployeeId(@PathVariable Long employeeId) {
        return evaluationService.getEvaluationsByEmployeeId(employeeId);
    }

    // Registrar evaluación con score, comentarios y fecha automática
    @PostMapping("/{employeeId}")
    public Evaluation registerEvaluation(@PathVariable Long employeeId, @RequestBody Evaluation evaluation) {
        return evaluationService.registerEvaluation(employeeId, evaluation.getScore(), evaluation.getComments());
    }
}