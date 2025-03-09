FROM openjdk:17-jdk-slim

WORKDIR /app

# Copiar el archivo JAR compilado al contenedor
COPY target/auth-service-0.0.1-SNAPSHOT.jar app.jar

# Exponer el puerto en el que correrá el microservicio
EXPOSE 8081

# Comando para ejecutar el microservicio
ENTRYPOINT ["java", "-jar", "app.jar"]
