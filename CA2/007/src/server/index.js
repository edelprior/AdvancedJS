const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const bodyParser = require('body-parser');

// import Mongoose and the Comment model
const mongoose = require('mongoose');
const Comment = require('./models/Comment');

const server = express();
const dbname = 'REACTCA2'; // change to match your database name

// serve files from the dist directory
server.use(express.static('dist'));

// URL to our DB - will be loaded from an env variable or will use local DB
const mongo_uri = process.env.MONGODB_URL || `mongodb://localhost:27017/${dbname}`;

let db;

mongoose.connect(mongo_uri, { useNewUrlParser: true }, function(err) {
  if (err) {
    throw err;
  } else {
    console.log(`Successfully connected to ${mongo_uri}`);
  }
});

// bodyParser, parses the request body to be a readable json format
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

// define the various endpoints

// retrieve all Comment objects from DB
server.get('/api/comments', (req, res) => {
  Comment.find({}, (err, result) => {
    if (err) throw err;

    console.log(result);
    res.send(result);
  });
});

// retrieve comment with specific ID from DB
server.get('/api/comments/:id', (req, res) => {
  Comment.findOne({_id: new ObjectID(req.params.id) }, (err, result) => {
    if (err) throw err;

    console.log(result);
    res.send(result);
  });
});

// delete Comment with specific ID from DB
server.delete('/api/comments', (req, res) => {
  Comment.deleteOne( {_id: new ObjectID(req.body.id) }, err => {
    if (err) return res.send(err);

    console.log('deleted from database');
    return res.send({ success: true });
  });
});

// create new Comment based on info supplied in request body
server.post('/api/comments', (req, res) => {
  // create a new comment object using the Mongoose model and the data sent in the POST
  const comment = new Comment(req.body);
  // save this object to the DB
  comment.save((err, result) => {
    if (err) throw err;

    console.log('created in database');
    res.redirect('/');
  });
});

// update comment based on info supplied in request body
server.put('/api/comments', (req, res) => {
  // get the ID of the comment to be updated
  const id  = req.body._id;
  // remove the ID so as not to overwrite it when updating
  delete req.body._id;
  // find a comment matching this ID and update their details
  Comment.updateOne( {_id: new ObjectID(id) }, {$set: req.body}, (err, result) => {
    if (err) throw err;

    console.log('updated in database');
    return res.send({ success: true });
  });
});

server.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
