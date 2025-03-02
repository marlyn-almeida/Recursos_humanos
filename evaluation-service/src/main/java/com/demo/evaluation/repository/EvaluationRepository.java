package com.demo.evaluation.repository;


import com.demo.evaluation.model.Evaluation;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface EvaluationRepository extends JpaRepository<Evaluation, Long> {
    List<Evaluation> findByEmployeeId(Long employeeId);
}
