package com.demo.evaluation.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Collections;
import java.util.Date;

@Component
public class JwtFilter extends OncePerRequestFilter {

    private static final String SECRET_KEY = "my-secret-key-1234567890123456"; // Clave secreta usada en el login

    private Claims extractClaims(String token) {
        return Jwts.parser()
                .setSigningKey(SECRET_KEY)
                .parseClaimsJws(token)
                .getBody();
    }

    private String extractUsername(String token) {
        return extractClaims(token).getSubject();
    }

    private boolean isTokenValid(String token) {
        try {
            Claims claims = extractClaims(token);
            boolean valid = claims.getExpiration().after(new Date());
            System.out.println(valid ? "✅ Token válido" : "❌ Token expirado");
            return valid;
        } catch (SignatureException e) {
            System.out.println("❌ Error en la firma del token");
            return false;
        }
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
            throws ServletException, IOException {
        String authHeader = request.getHeader("Authorization");
        System.out.println("🔹 Token recibido: " + authHeader);

        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            System.out.println("⚠️ No se encontró un token válido en la cabecera.");
            chain.doFilter(request, response);
            return;
        }

        String token = authHeader.substring(7);
        if (isTokenValid(token)) {
            String username = extractUsername(token);
            System.out.println("🔹 Usuario autenticado: " + username);

            User user = new User(username, "", Collections.emptyList()); // Solo establece el usuario sin roles
            UsernamePasswordAuthenticationToken authToken =
                    new UsernamePasswordAuthenticationToken(user, null, user.getAuthorities());
            authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

            SecurityContextHolder.getContext().setAuthentication(authToken);
        } else {
            System.out.println("❌ Token inválido o expirado.");
        }

        chain.doFilter(request, response);
    }
}
