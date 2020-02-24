FROM node:10-slim

WORKDIR /app

COPY package.json /app
COPY package-lock.json /app
COPY src/. /app/src
COPY public/. /app/public
COPY tsconfig.json /app
COPY nodemon.json /app

RUN npm install
RUN npm run build

EXPOSE 1280

ENTRYPOINT [ "npm","run","dev" ]