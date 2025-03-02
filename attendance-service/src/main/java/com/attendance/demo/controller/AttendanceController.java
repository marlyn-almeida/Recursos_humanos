package com.attendance.demo.controller;

import com.attendance.demo.model.Attendance;
import com.attendance.demo.service.AttendanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/attendance")
public class AttendanceController {

    @Autowired
    private AttendanceService attendanceService;

    @GetMapping
    public List<Attendance> getAllAttendanceRecords() {
        return attendanceService.getAllAttendanceRecords();
    }

    @GetMapping("/{employeeId}")
    public List<Attendance> getAttendanceByEmployeeId(@PathVariable Long employeeId) {
        return attendanceService.getAttendanceByEmployeeId(employeeId);
    }

    @PostMapping("/check-in/{employeeId}")
    public Attendance checkIn(@PathVariable Long employeeId) {
        return attendanceService.checkIn(employeeId);
    }

    @PutMapping("/check-out/{attendanceId}")
    public Attendance checkOut(@PathVariable Long attendanceId) {
        return attendanceService.checkOut(attendanceId);
    }
}
