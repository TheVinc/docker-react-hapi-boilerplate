FROM node:6.6.0

# Code load
COPY . /mnt
WORKDIR /mnt

# Define mountable directories.
VOLUME ["/mnt"]

EXPOSE 8080

CMD ["node", "index.js"]
