export default `
  type Author {
    id: Int!
    firstName: String!
    lastName: String!
    getPosts: [Post]
  }

  type Post {
    id: Int!
    title: String
    content: String!
    authorId: Int!
    getAuthor: Author
  }

  type Mutation {
    createPost(title: String, content:String!): Post
    updatePost(id: Int!, title: String, content:String!): [Int!]!
    deletePost(id: Int!): Int!
  }

  type Query {
    allAuthors: [Author]
    allPosts: [Post]
    authors(id: Int!): [Author]
    getPosts(id: Int!): [Post]
    getAuthor(id: Int!): Author
  }
`;
