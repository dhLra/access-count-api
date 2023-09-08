FROM node:16.17-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g

COPY . ./

RUN npx prisma generate

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]