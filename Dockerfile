FROM node:20.10.0

WORKDIR /app
COPY ./ /app

RUN npm install