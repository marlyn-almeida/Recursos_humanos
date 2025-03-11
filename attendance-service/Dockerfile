# Usar una imagen base de OpenJDK
FROM openjdk:17-jdk-slim

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar el archivo JAR desde el directorio de construcción
COPY target/attendance-service-0.0.1-SNAPSHOT.jar app.jar

# Exponer el puerto
EXPOSE 8083

# Comando para ejecutar la aplicación
ENTRYPOINT ["java", "-jar", "app.jar"]
