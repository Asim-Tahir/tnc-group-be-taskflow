FROM node:24-alpine
WORKDIR /app

COPY package*.json .
RUN npm ci --omit=dev

COPY . .

ENV PORT=3000
ENV NODE_ENV=production

EXPOSE ${PORT:-3000}

CMD ["node","./src/index.ts"]