package com.oauth.demo.controller;


import com.oauth.demo.dto.AuthRequest;
import com.oauth.demo.dto.RegisterRequest;
import com.oauth.demo.model.User;
import com.oauth.demo.security.JwtUtil;
import com.oauth.demo.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final JwtUtil jwtUtil;
    private final UserService userService;
    private final PasswordEncoder passwordEncoder;

    public AuthController(JwtUtil jwtUtil, UserService userService, PasswordEncoder passwordEncoder) {
        this.jwtUtil = jwtUtil;
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
    }

    // 🔹 REGISTRAR USUARIO
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request) {
        if (userService.existsByEmail(request.getEmail())) {
            return ResponseEntity.badRequest().body("El email ya está registrado");
        }

        User user = new User();
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));

        userService.saveUser(user);
        return ResponseEntity.ok("Usuario registrado correctamente");
    }

    // 🔹 LOGIN (VALIDAR CREDENCIALES Y GENERAR TOKEN)
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest request) {
        System.out.println("🔐 Intentando login con email: " + request.getEmail());

        User user = userService.findByEmail(request.getEmail());

        if (user == null) {
            System.out.println("❌ Usuario no encontrado");
            return ResponseEntity.status(401).body("Usuario no encontrado");
        }

        System.out.println("✅ Usuario encontrado en la BD: " + user.getEmail());
        System.out.println("🔑 Contraseña ingresada: " + request.getPassword());
        System.out.println("🔒 Contraseña en BD: " + user.getPassword());

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            System.out.println("❌ Contraseña incorrecta");
            return ResponseEntity.status(401).body("Contraseña incorrecta");
        }

        String token = jwtUtil.generateToken(user.getEmail());
        System.out.println("✅ Token generado: " + token);
        return ResponseEntity.ok("{\"token\": \"" + token + "\"}");
    }
}
