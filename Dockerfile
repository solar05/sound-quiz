FROM theasp/clojurescript-nodejs:alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build-verbose

FROM nginx:alpine
COPY ./public/ /usr/share/nginx/html
