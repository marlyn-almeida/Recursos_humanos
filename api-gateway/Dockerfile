# Usa una imagen base de OpenJDK
FROM openjdk:17-jdk-slim

# Configura el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo JAR de la aplicación (asegúrate de que el JAR se genere correctamente al compilar tu aplicacion)
COPY target/api-gateway-0.0.1-SNAPSHOT.jar app.jar

# Expone el puerto que el API Gateway usara
EXPOSE 8080

# Configura el comando de inicio de la aplicacion
ENTRYPOINT ["java", "-jar", "app.jar"]
