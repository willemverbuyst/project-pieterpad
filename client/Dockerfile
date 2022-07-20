FROM node:16

WORKDIR  /client

COPY package.json .

COPY yarn.lock .

RUN yarn install

COPY . .

ENV PORT 3000

EXPOSE $PORT

CMD ["yarn", "dev"]