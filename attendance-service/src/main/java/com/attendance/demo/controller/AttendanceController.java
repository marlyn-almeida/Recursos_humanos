package com.attendance.demo.controller;

import com.attendance.demo.model.Attendance;
import com.attendance.demo.service.AttendanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/attendance")
public class AttendanceController {

    @Autowired
    private AttendanceService attendanceService;

    // Obtener todos los registros de asistencia
    @GetMapping
    public List<Attendance> getAllAttendanceRecords() {
        return attendanceService.getAllAttendanceRecords();
    }

    // Obtener la asistencia de un empleado por ID
    @GetMapping("/{employeeId}")
    public List<Attendance> getAttendanceByEmployeeId(@PathVariable Long employeeId) {
        return attendanceService.getAttendanceByEmployeeId(employeeId);
    }

    // Registrar asistencia (solo la fecha)
    @PostMapping("/{employeeId}")
    public Attendance registerAttendance(@PathVariable Long employeeId) {
        return attendanceService.registerAttendance(employeeId);
    }
}
