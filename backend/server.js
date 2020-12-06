const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 4000;
const cloudtm = "mongodb+srv://root:root@cluster0.vj971.mongodb.net/movies?retryWrites=true&w=majority";

/* Define movie schema for sever. */
var movieSchema = new mongoose.Schema({
  title: String,
  year: String,
  poster: String
});
var movieModel = mongoose.model("movies", movieSchema);

/* Set up cors and body-parser. */
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* Connect to database. */
mongoose.connect(cloudtm, {useNewUrlParser: true})

/* Handle deleting of documents on server. */
app.delete('/api/movies/:id', function(req, res) {
  movieModel.deleteOne({_id: req.params.id}, function(e, data) {
    if (e)
      res.send(e);
    else /* Don't send the data if there was an error. */
      res.send(data);
  });
})

app.put('api/movies', (req, res) => {
  movieModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, data) => {
    res.send(data);
  })
})

/* Handle POST from front end and log data to console. */
app.post('/api/movies', (req, res) => {
  console.log(req.body.title + ' ' + req.body.year + ' ' + req.body.poster);

  /* Create document on server. */
  movieModel.create({
    title: req.body.title,
    year: req.body.year,
    poster: req.body.poster
  });

  res.send("create() successful");
})

/* Send back JSON data on ID search. */
app.get('/api/movies/:id', (req, res) => {
  movieModel.findById(req.params.id, (data) => {
    res.json(data);
  });
})

/* Send back JSON API on GET from front end. */
app.get('/api/movies', (req, res) => {
  movieModel.find((err, data) => {
    res.json(data);
  });
})

app.get('/', (req, res) => {
  res.send("Hello, world!");
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
})
