package com.demo.report.repository;



import com.demo.report.model.Report;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReportRepository extends JpaRepository<Report, Long> {
    List<Report> findByEmployeeId(Long employeeId);
}
