FROM johnpapa/angular-cli:latest AS builder
COPY . /root/
WORKDIR /root/

RUN npm install
RUN ng build --prod --output-path=/dist/

FROM nginx

COPY --from=builder /dist/ /usr/share/nginx/html

VOLUME /usr/share/nginx/html
