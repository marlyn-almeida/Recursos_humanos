package com.demo.evaluation.controller;



import com.demo.evaluation.model.Evaluation;
import com.demo.evaluation.service.EvaluationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/evaluations")
@RequiredArgsConstructor
public class EvaluationController {

    private final EvaluationService evaluationService;

    @PostMapping
    @PreAuthorize("hasAuthority('ROLE_MANAGER')")
    public ResponseEntity<Evaluation> createEvaluation(@RequestBody Evaluation evaluation) {
        return ResponseEntity.ok(evaluationService.saveEvaluation(evaluation));
    }

    @GetMapping("/{employeeId}")
    @PreAuthorize("hasAuthority('ROLE_HR') or hasAuthority('ROLE_MANAGER')")
    public ResponseEntity<List<Evaluation>> getEvaluations(@PathVariable Long employeeId) {
        return ResponseEntity.ok(evaluationService.getEvaluationsByEmployee(employeeId));
    }
}
