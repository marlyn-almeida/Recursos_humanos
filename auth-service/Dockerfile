# Usamos la imagen base de OpenJDK 17
FROM openjdk:17-jdk-slim

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar el archivo JAR compilado desde el directorio target de tu proyecto a la imagen
COPY target/auth-service-0.0.1-SNAPSHOT.jar /app/app.jar

# Exponer el puerto 8081, que es el puerto en el que se ejecutara el microservicio
EXPOSE 8081

# Comando para ejecutar el microservicio en el contenedor
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
