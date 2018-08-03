const express = require("express");
const bodyParser = require("body-parser"); 
const faker = require("faker");
const lodash = require("lodash");
const graphqlExpress = require("graphql-server-express"):
const db = require("./models");
const apiPost = require("./app/api/post");
const apiAuthor = require("./app/api/author");

const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema: 'graphqlApiNodeDemo'
}))
app.use(express.static("app/public"));

apiPost(app, db);
apiAuthor(app, db);

db.sequelize.sync().then( () => {
  // populate author table with dummy data
  db.author.bulkCreate(
    lodash.times(10, () => ({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName()
    }))
  );
  // populate post table with dummy data
  db.post.bulkCreate(
    lodash.times(10, () => ({
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraph(),
      authorId: lodash.random(1, 10)
    }))
  );
  app.listen(8080, () => 
    console.log("App listening on port 3000!")
  );
});