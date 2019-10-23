import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import faker from "faker";
import times from "lodash.times";
import random from "lodash.random";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import db from "./models";

const playground = {
  settings: {
    "editor.cursorShape": "line"
  }
};

const server = new ApolloServer({
  typeDefs: gql(typeDefs),
  resolvers,
  context: { db },
  playground
});

const app = express();
server.applyMiddleware({ app });

app.use(express.static("app/public"));

db.sequelize.sync().then(() => {
  // populate author table with dummy data
  db.author.bulkCreate(
    times(10, () => ({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName()
    }))
  );
  // populate post table with dummy data
  db.post.bulkCreate(
    times(10, () => ({
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraph(),
      authorId: random(1, 10)
    }))
  );

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
});
