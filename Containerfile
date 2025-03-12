FROM node:alpine

WORKDIR /app

COPY localsearch.js .

CMD ["node", "localsearch.js"]
