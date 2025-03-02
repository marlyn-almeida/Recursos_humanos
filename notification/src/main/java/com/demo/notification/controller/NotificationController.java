package com.demo.notification.controller;



import com.demo.notification.model.Notification;
import com.demo.notification.service.NotificationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notifications")
@RequiredArgsConstructor
public class NotificationController {

    private final NotificationService notificationService;

    // Endpoint para enviar una notificación
    @PostMapping("/send")
    public ResponseEntity<Notification> sendNotification(
            @RequestParam String recipient,
            @RequestParam String message) {
        Notification notification = notificationService.sendNotification(recipient, message);
        return ResponseEntity.ok(notification);
    }

    // Endpoint para obtener las notificaciones del usuario autenticado
    @GetMapping
    public ResponseEntity<List<Notification>> getUserNotifications(
            @AuthenticationPrincipal Jwt jwt) {
        String email = jwt.getClaim("email"); // Obtener el correo desde el token
        List<Notification> notifications = notificationService.getNotificationsForUser(email);
        return ResponseEntity.ok(notifications);
    }
}
