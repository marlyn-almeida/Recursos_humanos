package com.demo.report.controller;


import com.demo.report.model.Report;
import com.demo.report.service.ReportService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reports")
@RequiredArgsConstructor
public class ReportController {

    private final ReportService reportService;

    @GetMapping("/{employeeId}")
    public ResponseEntity<List<Report>> getReports(@PathVariable Long employeeId) {
        return ResponseEntity.ok(reportService.getReportsByEmployee(employeeId));
    }

    @PostMapping
    public ResponseEntity<Report> createReport(@RequestBody Report report) {
        return ResponseEntity.ok(reportService.createReport(report));
    }
}
