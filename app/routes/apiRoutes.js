module.exports = (app, db) => {
  app.get( "/posts", (req, res) =>
    db.post.findAll().then( (result) => res.json(result) )
  );

  app.post("/post", (req, res) => {
    db.post.create({
      title: req.body.title,
      content: req.body.content
    }).then( (result) => res.json(result) )
  });

  app.put( "/post/:id", (req, res) => {
    db.post.update({
      title: req.body.title,
      content: req.body.content
    },
    {
      where: {
        id: req.params.id
      }
    }).then( (result) => res.json(result) )
  });

  app.put( "/post/:id", (req, res) => {
    db.post.delete({
      where: {
        id: req.params.id
      }
    }).then( (result) => res.json(result) )
  });

  app.get( "/post/:id", (req, res) => {
    db.post.findById(req.params.id).then( (result) => res.json(result))
  });

  app.get( "/author/:id", (req, res) => {
    db.author.findById(req.params.id).then( (result) => res.json(result))
  });
}