FROM node:16

WORKDIR  /server

COPY package.json .

COPY yarn.lock .

RUN yarn install

COPY . .

ENV PORT 4000

EXPOSE $PORT

CMD ["yarn", "dev"]