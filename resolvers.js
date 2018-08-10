export default {
  Author: {
    posts: ( parent, { authorId }, { db }, info) =>
      db.post.find({where: {authorId: authorId} })
  },
  Post: {

    title: ( parent, args, { db }, info) => {
      console.log(parent);
      return parent.title;
    },

    author: ( parent, args, { db }, info) => {
      return parent.getAuthor();
    }
  },
  Query: {
    posts: ( parent, args, { db }, info) => db.post.findAll(),
    authors: ( parent, args, { db }, info) => db.author.findAll(),
    post: ( parent, { id }, { db }, info) => db.post.findById(id),
    author: ( parent, { id }, { db }, info) => db.author.findById(id) 
  }
};
