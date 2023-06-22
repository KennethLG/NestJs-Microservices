
FROM node:16 AS builder
WORKDIR /app
COPY package*.json .npmrc ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:16-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/.npmrc ./.npmrc
COPY --from=builder /app/package*.json .
EXPOSE 3000
CMD ["npm", "run", "start:prod"]