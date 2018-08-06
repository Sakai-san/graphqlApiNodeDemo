import { ApolloServer, gql } from 'apollo-server';

import faker from 'faker';
import lodash from 'lodash';

import apiPost from './app/api/post';
import apiAuthor from './app/api/author';


import typeDefs from './schema';
import resolvers from './resolvers';
import db from './models';

/*

app.use(express.static('app/public'));

*/

const server = new ApolloServer({
  typeDefs: gql(typeDefs),
  resolvers,
  context: { db }
});


db.sequelize.sync().then(() => {
  // populate author table with dummy data
  db.author.bulkCreate(
    lodash.times(10, () => ({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
    })),
  );
  // populate post table with dummy data
  db.post.bulkCreate(
    lodash.times(10, () => ({
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraph(),
      authorId: lodash.random(1, 10),
    })),
  );

  server.listen().then(({ url }) => { console.log(`🚀  Server ready at ${url}`); });
});
