module.exports = (app, db) => {
  app.get( "/author/:id", (req, res) =>
    db.author.findById(req.params.id).then( (result) => res.json(result))
  );
}