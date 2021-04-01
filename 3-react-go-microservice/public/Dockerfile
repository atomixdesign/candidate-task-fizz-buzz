# 1. using the node apline image as the base stage of a multi-stage routine
FROM node:13.7.0-alpine as base

# 2. Setting working directory
WORKDIR /public
COPY . /public
ENV PATH /public/node_modules/.bin:$PATH

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
