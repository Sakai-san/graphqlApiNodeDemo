# Tutorial on how to create a rest api with nodejs, sequelize

## keywords
ES2015, restful, REST, api, expressjs. nodejs, promise, ORM, sequelize, relationnal database,


## Goal
  Goal of this tutorial is to introduce in a few steps how does graphql work.

  that purpose.
  * in this demo we are using a so called ORM for avoid mixing up JS and SQL and we can create table not by having a separate sql script. Indeed we do not want to have statement like this :
    connection.query(" SELECT * from Author WHERE name=?", 'David', (error, result)=> {

    });

## Introduction
In this tutorial all steps for building a REST API are going to be detailed. But wait a second. What is a REST API ? A REST API is a web resource which perform a given action on a data.
This action are so called CRUD action. The main idea of REST is the associate the HTTP protocol wich the CRUD actions mentioned. Indeed HTTP alredy have some distingueshed HTTP resquest, namely
GET, POST, PUT, DELETE.

This brillant idea has been developed by [Fielding](https://de.wikipedia.org/wiki/Roy_Fielding) has been discussed in the PHD thesis. 

## Setup environment

  * install a mysql server, for example via [xampp](https://www.apachefriends.org/index.html)
  * install nodejs in through [nvm](https://github.com/creationix/nvm)

## Setup project
  * > mkdir restApiNodeDemo
  * > npm init -y
  * > npm i express sequelize mysql2 --save
  * > npm i nodemon sequelize-cli --save-dev
  * add this two line under `scripts` in `package.json`
        `"start": "./node_modules/nodemon/bin/nodemon.js app.js,"`
        `"sequelize-skeleton": "./node_modules/sequelize-cli/lib/sequelize init:models && ./node_modules/sequelize-cli/lib/sequelize init:config"`        

## Execute the script
  * create skeleton : >  "./node_modules/sequelize-cli/lib/sequelize init:models && init:config" init:models init:config
  * create two directories : > mkdir -p app/routes 

## Implement the ORM 
  data model in Sequelize

## Implement the api
  create a routeAPi

## Write the server
  create a routeAPi

## Test end points
  create a routeAPi

## Actually consume your api
  create a routeAPi

## Actually consume your api
  create a routeAPi