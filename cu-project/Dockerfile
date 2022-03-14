FROM node:14
WORKDIR /cu-project
COPY . /cu-project/

RUN yarn install
RUN yarn build:ssr
CMD yarn start