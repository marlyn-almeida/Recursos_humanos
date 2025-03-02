package com.demo.evaluation.service;



import com.demo.evaluation.model.Evaluation;
import com.demo.evaluation.repository.EvaluationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class EvaluationService {

    private final EvaluationRepository evaluationRepository;

    public Evaluation saveEvaluation(Evaluation evaluation) {
        return evaluationRepository.save(evaluation);
    }

    public List<Evaluation> getEvaluationsByEmployee(Long employeeId) {
        return evaluationRepository.findByEmployeeId(employeeId);
    }
}
