FROM nginx

WORKDIR /mnt

RUN rm /etc/nginx/nginx.conf
COPY nginx/nginx-template.conf /etc/nginx/nginx-template.conf
COPY nginx/sites.conf /etc/nginx/sites.conf

COPY ./start.sh /mnt/start.sh
RUN chmod +x /mnt/start.sh

EXPOSE 80
EXPOSE 443

CMD ["./start.sh"]
