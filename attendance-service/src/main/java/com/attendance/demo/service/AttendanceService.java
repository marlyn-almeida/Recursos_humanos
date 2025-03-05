package com.attendance.demo.service;

import com.attendance.demo.model.Attendance;
import com.attendance.demo.repository.AttendanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDate;
import java.util.List;

@Service
public class AttendanceService {

    @Autowired
    private AttendanceRepository attendanceRepository;

    // Obtener todos los registros de asistencia
    public List<Attendance> getAllAttendanceRecords() {
        return attendanceRepository.findAll();
    }

    // Obtener asistencia por empleado
    public List<Attendance> getAttendanceByEmployeeId(Long employeeId) {
        return attendanceRepository.findByEmployeeId(employeeId);
    }

    // Registrar asistencia con solo la fecha
    public Attendance registerAttendance(Long employeeId) {
        Attendance attendance = Attendance.builder()
                .employeeId(employeeId)
                .date(LocalDate.now()) // ✅ Guardamos solo la fecha
                .build();
        return attendanceRepository.save(attendance);
    }
}
