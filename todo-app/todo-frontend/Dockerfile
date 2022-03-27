FROM node:16 AS dev-stage
WORKDIR /usr/src/app
COPY . .
RUN npm ci
RUN CI=true npm test

FROM node:16 AS build-stage
WORKDIR /usr/src/app
COPY . .
ENV REACT_APP_BACKEND_URL=localhost:3000

RUN npm run build
RUN npm install -g serve
CMD ["serve", "-s" "build"]