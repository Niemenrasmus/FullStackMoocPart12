FROM node:16
USER node
WORKDIR /usr/src/app
COPY . .¨
RUN npm ci
CMD ["npm", "run", "dev"]