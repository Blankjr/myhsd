FROM node:latest

WORKDIR /app

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

COPY package*.json ./
RUN npm ci --omit=dev
COPY . .

COPY /dist /app/dist

EXPOSE 3000

CMD ["node", "dist/main"]