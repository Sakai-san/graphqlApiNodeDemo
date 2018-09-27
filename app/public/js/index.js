import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const client = new ApolloClient();
const query = gql`
  query {
    posts {
      title
      author {
        firstName
      }
    }
  }
`;

const body = document.body;
client.query({ query }).then((results) => {
  results.data.posts.forEach( (post) => renderPost(body, post) );
});

const renderPost = (body, post) => {
  const section = document.createElement('section');
  const domString = `
    <p>
      <strong>Post: </strong>${post.title}
    </p>
    <p>
      <strong>Author: </strong>${post.author.firstName}
    </p>
  `;
  section.innerHTML = domString;
  body.appendChild(section);
};