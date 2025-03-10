# Etapa 1: Construcción del frontend
FROM node:16-slim as build

# Directorio de trabajo en el contenedor
WORKDIR /app

# Copiamos los archivos de configuración y dependencias de tu proyecto frontend
COPY package.json package-lock.json /app/

# Instalamos las dependencias y jspdf-autotable
RUN npm install && npm install jspdf-autotable

# Copiamos el código fuente del frontend
COPY . /app/

# Construimos el proyecto para producción
RUN npm run build

# Etapa 2: Servir el contenido con Nginx
FROM nginx:alpine

# Copiamos el build generado por React al contenedor de Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exponemos el puerto 80 para servir la aplicación
EXPOSE 80

# Iniciamos Nginx para servir el contenido
CMD ["nginx", "-g", "daemon off;"]
