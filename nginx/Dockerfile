FROM nginx:1.15-alpine

EXPOSE 80

#RUN rm /usr/share/nginx/html/*

COPY configs/default.conf /etc/nginx/conf.d/default.conf

CMD [ "/bin/sh -c 'while :; do sleep 6h & wait $${!}; nginx -s reload; done & nginx -g \"daemon off;\"'" ]