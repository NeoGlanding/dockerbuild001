FROM node:20-alpine3.16

WORKDIR /usr/app

COPY ./package.json ./
RUN yarn install
COPY ./ ./

CMD ["yarn", "start"]