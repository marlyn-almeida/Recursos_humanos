package com.attendance.demo.service;


import com.attendance.demo.model.Attendance;
import com.attendance.demo.repository.AttendanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class AttendanceService {

    @Autowired
    private AttendanceRepository attendanceRepository;

    public List<Attendance> getAllAttendanceRecords() {
        return attendanceRepository.findAll();
    }

    public List<Attendance> getAttendanceByEmployeeId(Long employeeId) {
        return attendanceRepository.findByEmployeeId(employeeId);
    }

    public Attendance checkIn(Long employeeId) {
        Attendance attendance = Attendance.builder()
                .employeeId(employeeId)
                .checkInTime(LocalDateTime.now())
                .build();
        return attendanceRepository.save(attendance);
    }

    public Attendance checkOut(Long attendanceId) {
        return attendanceRepository.findById(attendanceId).map(attendance -> {
            attendance.setCheckOutTime(LocalDateTime.now());
            return attendanceRepository.save(attendance);
        }).orElseThrow(() -> new RuntimeException("Registro de asistencia no encontrado"));
    }
}

