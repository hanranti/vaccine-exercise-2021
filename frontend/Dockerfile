FROM node:14.16-slim

WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN npm run build

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

RUN if [ "${NODE_ENV}" != "development" ]; then \
    npm run build && npm install -g serve; \
    fi

CMD serve -s build -l "${PORT}"