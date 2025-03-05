package com.attendance.demo.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate; // ✅ Importación correcta

@Entity
@Table(name = "attendances")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Attendance {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long employeeId;

    @Column(nullable = false)
    private LocalDate date; // 📅 Ahora sí funcionará
}
