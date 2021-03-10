FROM node:12-slim
WORKDIR /src
COPY . /src
RUN yarn
VOLUME ["/src"]