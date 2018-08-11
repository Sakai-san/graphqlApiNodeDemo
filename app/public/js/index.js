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

const ul = document.querySelectorAll('#container ul')[0];
client.query({ query }).then((results) => {
  results.data.posts.forEach( (post) => renderPost(ul, post) );
});

const renderPost = (ulElement, post) => {
  const li = document.createElement('li');
  const postParagraph = document.createElement('p');
  const postLabel = document.createElement('strong');
  postLabel.append(document.createTextNode('Post: '));
  const postTitle = document.createTextNode(post.title);
  postParagraph.append(postLabel, postTitle);
  const authorParagraph = document.createElement('p');
  const authorLabel = document.createElement('strong');
  authorLabel.append(document.createTextNode('Author: '));
  const authorFirstName = document.createTextNode( post.author.firstName);
  authorParagraph.append(authorLabel, authorFirstName);
  li.append(postParagraph, authorParagraph);
  ulElement.append(li);
};
