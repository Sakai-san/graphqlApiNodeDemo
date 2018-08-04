export default `
  type Author {
    id: Int!
    firstName: String!
    lastName: String!
  }

  type Post {
    id: Int!
    title: String
    content: String!
  }

  type Mutatation {
    createPost(title: String, content:Sring!): Post!
    updatePost(id: Int!): [Int!]!
    deletePost(id: Int!): Int!
  }

  type Query {
    allPosts: [POSTS]!
    getPost(id: Int!): POST
    getAuthor(id: Int!): Author
  }
`;