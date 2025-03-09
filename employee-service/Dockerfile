# Usamos una imagen base liviana
FROM eclipse-temurin:17-jdk-alpine

# Definimos el directorio de trabajo
WORKDIR /app

# Copiamos el JAR
COPY target/employee-service-0.0.1-SNAPSHOT.jar app.jar

# Exponemos el puerto
EXPOSE 8082

# Configuramos el punto de entrada
CMD ["java", "-jar", "app.jar"]
