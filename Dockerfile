FROM node:8

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm run build

COPY . .

EXPOSE 8080
CMD [ "npm", "run", "server" ]