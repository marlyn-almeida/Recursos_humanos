package com.oauth.demo.service;

import com.oauth.demo.model.User;
import com.oauth.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void saveUser(User user) {
        userRepository.save(user);
    }

    public User findByEmail(String email) {
        User user = userRepository.findByEmail(email).orElse(null);
        System.out.println("🔍 Buscando usuario con email: " + email);
        System.out.println("✅ Usuario encontrado: " + (user != null ? user.getEmail() : "No encontrado"));
        return user;
    }

    public boolean existsByEmail(String email) {
        return userRepository.findByEmail(email).isPresent();
    }
}
