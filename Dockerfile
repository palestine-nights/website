FROM node:alpine as builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

FROM node:alpine

RUN npm i -g http-server

COPY --from=builder /app/dist/ /dist

EXPOSE 8080

CMD ["http-server", "--gzip", "dist"]
