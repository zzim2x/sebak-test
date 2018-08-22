FROM node:10-alpine

ADD . /www

WORKDIR /www

RUN npm install

CMD npm test --silent -- -R xunit