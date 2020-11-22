FROM node:12 AS builder

ENV REACT_APP_API_HOST http://localhost:7000
ENV PATH /app/node_modules/.bin:$PATH
WORKDIR /app
COPY ./ /app
RUN npm install
RUN npm run build

FROM nginx:1.19
RUN apt update && apt install curl
RUN curl -L https://github.com/a8m/envsubst/releases/download/v1.1.0/envsubst-`uname -s`-`uname -m` -o envsubst && \
    chmod +x envsubst && \
    mv envsubst /usr/local/bin
COPY deployment/nginx.conf /etc/nginx/nginx.template
CMD ["/bin/sh", "-c", "envsubst < /etc/nginx/nginx.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
COPY --from=builder /app/build /usr/share/nginx/data
