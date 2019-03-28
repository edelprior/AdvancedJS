const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('./models/User');
const withAuth = require('./middleware');

const app = express();

const secret = 'secret_should_not_be_in_git';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

const mongo_uri = 'mongodb+srv://edel:Thehomeshow10.@react-ca2-5eh1m.mongodb.net/React-CA2?retryWrites=true';
mongoose.connect(mongo_uri, { useNewUrlParser: true }, function(err) {
  if (err) {
    throw err;
  } else {
    console.log(`Successfully connected to ${mongo_uri}`);
  }
});

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/home', function(req, res) {
  res.send('Welcome!');
});

app.get('/api/secret', withAuth, function(req, res) {
  res.send('The password is potato');
});

app.post('/api/register', function(req, res) {
  const { email, password } = req.body;
  const user = new User({ email, password });
  user.save(function(err) {
    if (err) {
      console.log(err);
      res.status(500).send('Error registering new user please try again.');
    } else {
      res.status(200).send('Welcome to the club!');
    }
  });
});

app.post('/api/authenticate', function(req, res) {
  const { email, password } = req.body;
  User.findOne({ email }, function(err, user) {
    if (err) {
      console.error(err);
      res.status(500)
        .json({
          error: 'Internal error please try again'
        });
    } else if (!user) {
      res.status(401)
        .json({
          error: 'Incorrect email or password'
        });
    } else {
      user.isCorrectPassword(password, function(err, same) {
        if (err) {
          res.status(500)
            .json({
              error: 'Internal error please try again'
            });
        } else if (!same) {
          res.status(401)
            .json({
              error: 'Incorrect email or password'
            });
        } else {
          // Issue token
          const payload = { email };
          const token = jwt.sign(payload, secret, {
            expiresIn: '1h'
          });
          res.cookie('token', token, { httpOnly: true }).sendStatus(200);
        }
      });
    }
  });
});

app.get('/api/checkToken', withAuth, function(req, res) {
  res.sendStatus(200);
});

app.get('/api/logout', withAuth, function(req, res) {
  res.cookie('token', '', { httpOnly: true }).sendStatus(200);;
});

app.listen(process.env.PORT || 8080);

// ------------------------------------------------- //
// ---------------- COMMENTS -------------------------- //
// ------------------------------------------------- //

// app.get('./api/comments', (req, res) => {
//   User.find().toArray((err, result) => {
//       if (err) throw err;
//       console.log(result);
//       res.send(result);
//   res.send(result);
// });
//

// });
//
// // retrieve user with specific ID from DB
// server.get('/api/comments/:id', (req, res) => {
//   db.collection('comments').findOne({_id: new ObjectID(req.params.id) }, (err, result) => {
//     if (err) throw err;
//
//     console.log(result);
//     res.send(result);
//   });
// });
//
// // delete user with specific ID from DB
// server.delete('/api/comments', (req, res) => {
//   db.collection('comments').deleteOne( {_id: new ObjectID(req.body.id) }, err => {
//     if (err) return res.send(err);
//
//     console.log('deleted from database');
//     return res.send({ success: true });
//   });
// });
//
// // create new user based on info supplied in request body
// server.post('/api/comments', (req, res) => {
//   db.collection('comments').insertOne(req.body, (err, result) => {
//     if (err) throw err;
//
//     console.log('created in database');
//     res.redirect('/');
//   });
// });
//
// // update user based on info supplied in request body
// server.put('/api/comments', (req, res) => {
//   // get the ID of the user to be updated
//   const id  = req.body._id;
//   // remove the ID so as not to overwrite it when updating
//   delete req.body._id;
//   // find a user matching this ID and update their details
//   db.collection('comments').updateOne( {_id: new ObjectID(id) }, {$set: req.body}, (err, result) => {
//     if (err) throw err;
//
//     console.log('updated in database');
//     return res.send({ success: true });
//   });
// });
