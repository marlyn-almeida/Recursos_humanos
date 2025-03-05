package com.demo.evaluation.model;


import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;

@Entity
@Table(name = "evaluations")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Evaluation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long employeeId;

    @Column(nullable = false)
    private int score;

    @Column(nullable = false)
    private String comments;

    @Column(nullable = false)
    private LocalDate date; // 📅 Agregamos la fecha de evaluación
}
