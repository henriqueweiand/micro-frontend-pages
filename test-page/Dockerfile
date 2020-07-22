FROM node:13.12.0-alpine

COPY package.json .

ENV CI=true

RUN npm i -s --no-progress && \
    mkdir /app && \
    cp -R ./node_modules ./app

WORKDIR /app

COPY . .

RUN npm install --production=false

CMD [ "npm", "start" ]