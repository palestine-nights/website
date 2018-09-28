FROM node:alpine

RUN npm install -g http-server

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

EXPOSE 8080

CMD ["http-server", "dist"]