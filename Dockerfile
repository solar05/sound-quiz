FROM theasp/clojurescript-nodejs:alpine AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build-verbose

FROM nginx:alpine
COPY --from=build /app/public/ /usr/share/nginx/html/
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
