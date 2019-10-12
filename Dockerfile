FROM node:12-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install && npm run build && npm prune --production
EXPOSE 3000
CMD [ "npm", "run" , "start:prod" ]