package com.demo.report.service;


import com.demo.report.model.Report;
import com.demo.report.repository.ReportRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ReportService {

    private final ReportRepository reportRepository;

    public List<Report> getReportsByEmployee(Long employeeId) {
        return reportRepository.findByEmployeeId(employeeId);
    }

    public Report createReport(Report report) {
        return reportRepository.save(report);
    }
}
