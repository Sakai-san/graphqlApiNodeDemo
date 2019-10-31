FROM node:latest

# create app directory
WORKDIR /usr/src/app

RUN apt install update
RUN apt install -y mysql

# copy package.json and package-lock.json
COPY package*.json ./

RUN npm install

# bundle app source
COPY . .

EXPOSE 4000
CMD ["npm", "run", "start"]