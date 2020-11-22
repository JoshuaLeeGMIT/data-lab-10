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

/* Handle POST from front end and log data to console. */
app.post('/api/movies', (req, res) => {
  console.log(req.body.title + ' ' + req.body.year + ' ' + req.body.poster);

  movieModel.create({
    title: req.body.title,
    year: req.body.year,
    poster: req.body.poster
  });

  res.send("create() successful");
})

/* Send back JSON API on GET from front end. */
app.get('/api/movies', (req, res) => {
  let data = [
    {
      "Title": "Avengers: Infinity War",
      "Year": "2018",
      "imdbID": "tt4154756",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    },
    {
      "Title": "Captain America: Civil War",
      "Year": "2016",
      "imdbID": "tt3498820",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    },
    {
      "Title": "World War Z",
      "Year": "2013",
      "imdbID": "tt0816711",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
    },
    {
      "Title": "War of the Worlds",
      "Year": "2005",
      "imdbID": "tt0407304",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNDUyODAzNDI1Nl5BMl5BanBnXkFtZTcwMDA2NDAzMw@@._V1_SX300.jpg"
    }
  ];

  movieMode.find((err, data) => {
    res.json(data);
  });
})

app.get('/', (req, res) => {
  res.send("Hello, world!");
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
})
