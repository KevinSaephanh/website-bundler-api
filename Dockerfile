# development stage
FROM node:20 as development

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]

# production stage
FROM node:20 as production

COPY --from=development /app/package*.json ./

RUN npm install --production

COPY --from=development /app/dist ./dist

CMD ["npm", "run", "start"]