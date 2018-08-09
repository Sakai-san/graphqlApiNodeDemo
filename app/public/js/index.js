import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const client = new ApolloClient();
const query = gql`
  query {
    posts {
      title
      content
      author {
        lastName
        firstName
      }
    }
  }
`;

client.query({query}).then((results) => {
  console.log(results);  
});

// npm install apollo-client apollo-cache-inmemory apollo-link-http graphql-tag graphql --save