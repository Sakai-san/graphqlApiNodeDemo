FROM node:latest

# create app directory
WORKDIR /usr/src/app

RUN apt update
RUN apt install -y mysql-server

# copy package.json and package-lock.json
COPY package*.json ./

RUN npm install

# bundle app source
COPY . .

EXPOSE 4000
CMD ["systemctl",  "start", 'mysql']

CMD ["npx", "babel-node", "server.js"]
