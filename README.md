# Setup a GraphQL API with Sequelize and Express.js

## Instructions
Please do follow the instructions in the article published on [medium](https://medium.com/infocentric).


## project setup
```
  npm i --save apollo-server-express body-parser express mysql2 graphql graphql-tools sequelize

  npm install webpack webpack-cli --save-dev

  npm i --save-dev nodemon babel-cli babel-preset-env babel-preset-stage-3 faker lodash

  ./node_modules/eslint/bin/eslint.js --init
  
  -> Use a popular style guide
  -> Airbnb (https://github.com/airbnb/javascript)
  -> No
  -> JavaScript
  -> Yes
  -> Yes

```


some resource
https://www.youtube.com/watch?v=kXH2dbnHYA0
https://www.youtube.com/watch?v=DNPVqK_woRQ


1)
Restful API's are optimized for servers, not clients. Mark Twain

Too many HTTP request
2) Client first popularized by netfilx
https://www.youtube.com/watch?v=broQmxQAMjM
Separated endpoints for desktop, mobile, TV.

3) graphQL is actually two different things :
  specification
  query language for API



Problem with REST API

* no specification on how to query data, e.g. ascending sorting by author name.
* transform data structure before actully we can use it
* maintain a lot a different endpoints
* load unnecessary data
* do multiple HTTP requests

Graphql is Generic way of serving diffent kindof clients.
Schema written in the so-called Schema Definition Language. Schema is a model for your API.

Three root types : Query, Mutation, Subscription
There are equivlent to entries point in the rest world. 
Query is equivalt to 

Release in 2015 but prototype started in 2012.

Graphql is a language for API. GraphQL has nothing to do with database language.

the args in the resolver are the args passed in the client query

Schema is a data model of data you can query.

! means that the field is required
