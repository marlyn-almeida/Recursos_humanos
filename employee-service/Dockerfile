# Usa una imagen base de OpenJDK 17
FROM openjdk:17-jdk-slim

# Configura el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo JAR de la aplicación (asegúrate de que el JAR se genere correctamente al compilar tu aplicación)
COPY target/employee-service-0.0.1-SNAPSHOT.jar app.jar

# Expone el puerto
EXPOSE 8082

# Configura el comando de inicio de la aplicación
CMD ["java", "-jar", "app.jar"]
