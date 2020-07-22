FROM node:12-slim
RUN apt-get update
RUN apt-get install --assume-yes git

COPY package.json .
COPY package-lock.json .
COPY yarn.lock .

ENV NODE_ENV=production

RUN npm install pm2 -g
RUN npm install -g serve

RUN npm i -s --no-progress && \
    mkdir /app && \
    cp -R ./node_modules ./app

WORKDIR /app

COPY . .

RUN yarn install --production=false && yarn build

CMD [ "yarn", "start" ]