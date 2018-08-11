export default `
  type Author {
    id: ID!
    firstName: String!
    lastName: String!
    posts: [Post!]!
  }

  type Post {
    id: ID!
    title: String
    content: String!
    authorId: ID!
    author: Author!
  }

  type Query {
    posts: [Post!]!
    post(id: ID!): Post
    author(id: ID!): Author
    authors: [Author!]!
  }

  type Mutation {
    createPost(title: String, content:String!, authorId: ID!): Post!
    updatePost(id: ID!, title: String, content:String!): [Int!]!
    deletePost(id: ID!): Int!
  }
`;