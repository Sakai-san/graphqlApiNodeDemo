export default {
  Author: {
    posts: (parent, args, context, info) => parent.getPosts(),
  },
  Post: {
    author: (parent, args, context, info) => parent.getAuthor(),
  },
  Query: {
    posts: (parent, args, { db }, info) => db.post.findAll(),
    authors: (parent, args, { db }, info) => db.author.findAll(),
    post: (parent, { id }, { db }, info) => db.post.findById(id),
    author: (parent, { id }, { db }, info) => db.author.findById(id) 
  },
  Mutation: {
    createPost: (parent, { title, content, authorId }, { db }, info) =>
      db.post.create({
        title: title,
        content: content,
        authorId: authorId
      }),
    updatePost: (parent, { title, content, id }, { db }, info) =>
      db.post.update({
        title: title,
        content: content
      },
      {
        where: {
          id: id
        }
      }),
    deletePost: (parent, {id}, { db }, info) =>
      db.post.destroy({
        where: {
          id: id
        }
      })
  }
};
