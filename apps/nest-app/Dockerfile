FROM node:14.17.3-alpine As development
WORKDIR /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=development
COPY . .
RUN npm install --save glob
RUN npm install -g nx
RUN nx run nest-app:build:production

FROM node:14.17.3-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY --from=development /usr/src/app/dist/apps/nest-app ./dist
RUN rm ./dist/package*.json
COPY --from=development /usr/src/app/dist/apps/nest-app/package.json .
RUN npm install --only=production
CMD ["node", "dist/main"]