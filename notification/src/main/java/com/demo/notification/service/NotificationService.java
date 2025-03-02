package com.demo.notification.service;


import com.demo.notification.model.Notification;
import com.demo.notification.repository.NotificationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class NotificationService {

    private final NotificationRepository notificationRepository;

    public Notification sendNotification(String recipient, String message) {
        Notification notification = Notification.builder()
                .recipient(recipient)
                .message(message)
                .sentAt(LocalDateTime.now())
                .build();
        return notificationRepository.save(notification);
    }

    public List<Notification> getNotificationsForUser(String recipient) {
        return notificationRepository.findByRecipient(recipient);
    }
}
