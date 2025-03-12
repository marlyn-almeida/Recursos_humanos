# Usar una imagen base de Nginx
FROM nginx:alpine

# Eliminar la configuración por defecto de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copiar los archivos del build de React al directorio adecuado de Nginx
COPY ./build /usr/share/nginx/html

# Copiar la configuración personalizada de Nginx
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto 80
EXPOSE 80

# Ejecutar Nginx en modo primer plano
CMD ["nginx", "-g", "daemon off;"]
