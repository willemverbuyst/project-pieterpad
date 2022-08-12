FROM node:14

WORKDIR /client

COPY package.json .

COPY yarn.lock .

RUN yarn install

COPY . .

ENV PORT 1234

EXPOSE $PORT

CMD ["yarn", "start"]