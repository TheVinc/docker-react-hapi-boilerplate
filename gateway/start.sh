#! /bin/bash

if [ ! -f "/etc/nginx/nginx.conf" ]
then
  # Replace server name with correct domain
  if [ -z $DOMAIN ]; then
    sed s/__DOMAIN__/localhost/g /etc/nginx/nginx-template.conf > /etc/nginx/nginx.conf
  else
    sed s/__DOMAIN__/$DOMAIN/g /etc/nginx/nginx-template.conf > /etc/nginx/nginx.conf
  fi
fi

nginx -s quit
service nginx stop
service nginx start
tail -f /var/log/nginx/error.log
