export default `
  type Author {
    id: ID!
    firstName: String!
    lastName: String!
    posts: [Post]!
  }

  type Post {
    id: ID!
    title: String
    content: String!
    authorId: ID!
    author: Author
  }

  type Mutation {
    createPost(title: String, content:String!): Post
    updatePost(id: ID!, title: String, content:String!): [Int!]!
    deletePost(id: ID!): Int!
  }

  type Query {
    posts: [Post]!
    post(id: Int!): Post
    author(id: Int!): Author
    authors: [Author]!
  }
`;