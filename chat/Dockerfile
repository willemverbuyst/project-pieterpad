FROM node:16

WORKDIR /chat

COPY package.json .

COPY yarn.lock .

RUN yarn install

COPY . . 

ENV PORT 8000

EXPOSE $PORT

CMD ["yarn", "dev"]
