# BUILD FOR LOCAL DEVELOPMENT

FROM node:20-alpine As development

WORKDIR /usr/src/app

EXPOSE 4444

COPY --chown=node:node package*.json ./

RUN npm install

RUN npm rebuild bcrypt

COPY --chown=node:node . .

USER node

# BUILD FOR PRODUCTION

FROM node:18-alpine As build

WORKDIR /usr/src/app

COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules

COPY --chown=node:node . .

RUN npm run build

ENV NODE_ENV production

RUN npm ci --only=production && npm cache clean --force

USER node

FROM node:18-alpine As production

COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist

CMD [ "node", "dist/main.js" ]