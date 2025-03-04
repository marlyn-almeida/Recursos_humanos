package com.oauth.demo.controller;



import com.oauth.demo.dto.AuthRequest;
import com.oauth.demo.dto.RegisterRequest;
import com.oauth.demo.model.User;
import com.oauth.demo.security.JwtUtil;
import com.oauth.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserService userService;

    @Autowired
    private PasswordEncoder passwordEncoder;

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
        User user = userService.findByEmail(request.getEmail());

        if (user == null || !passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            return ResponseEntity.status(401).body("Credenciales inválidas");
        }

        String token = jwtUtil.generateToken(user.getEmail());
        return ResponseEntity.ok("{\"token\": \"" + token + "\"}");
    }
}
