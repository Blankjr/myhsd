# Production image for kubernetes deployment
FROM nginx:stable-alpine
COPY /build /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]