# first stage

FROM node:18-alpine as BUILD_IMAGE
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENTRYPOINT npm run build


# second stage
FROM node:18-alpine as PRODUCTION_IMAGE
WORKDIR /app
COPY --from=BUILD_IMAGE /app/dist /app/dist
EXPOSE 4001
COPY package*.json ./
RUN npm install typescript
EXPOSE 4001
CMD ["npm","run","preview"]

