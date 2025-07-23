FROM node:18
WORKDIR src/app 
COPY package.json .
COPY app.js .
COPY server.js .
COPY _test_/test.js .
RUN npm install && npm test
EXPOSE 3000
CMD ["node","server.js"]
