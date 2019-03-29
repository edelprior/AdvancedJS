// LOG IN BACK END

// - - - - - - - - - - - - - - - - - - - - - -
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

// - - - - - - - - - - - - - - - - - - - - - -
const Lecturer = require('./models/Lecturer');
const Module = require('./models/Module');
const User = require('./models/User');
const withAuth = require('./middleware');

const app = express();

const secret = 'secret_should_not_be_in_git';


// - - - - - - - - - - - - - - - - - - - - - -


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());


// - - - - - DB CONNECTION  - - - - - - - -
const mongo_uri = 'mongodb://localhost/REACTCA2';
// const mongo_uri = 'mongodb+srv://edel:Thehomeshow10.@react-ca2-5eh1m.mongodb.net/React-CA2?retryWrites=true';
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

// - - - - - - REGISTER - - - - - - -
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
// - - - - - - - - - - - - - - - - - - - - - -


// - - - - - AUTHENTICATE  - - - - - - -
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

// - - - - - - USING MIDDLEWARE TO CHECK WEB TOKEN  - - - - - - -
app.get('/api/checkToken', withAuth, function(req, res) {
  res.sendStatus(200);
});

app.get('/api/logout', withAuth, function(req, res) {
  res.cookie('token', '', { httpOnly: true }).sendStatus(200);;
});

// - - - - - - - - - - - - - - - - - - - - - -
// - - - - ONE - MANY CODE - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - -

app.get('/api/lecturers', function(req, res) {
  Lecturer.find({}, function(err, data) {
    if (err) throw err;

    res.send(data);
  });
});

app.get('/api/modules', function(req, res) {
  Module.find({}, function(err, data) {
    if (err) throw err;

    res.send(data);
  });
});

app.get('/api/lecturers/:id', function(req, res) {
  Lecturer.findOne({_id: req.params.id}, function(err, data) {
    if (err) throw err;

    res.send(data);
  });
});

app.get('/api/lecturers/:id/modules', function(req, res) {
  Lecturer.findOne({_id: req.params.id}, function(err, data) {
    if (err) throw err;

    Module.find({lecturer_id: data._id}, function(err, modules) {
      if (err) throw err;

      res.send(modules);
    });
  });
});

app.listen(process.env.PORT || 8080);
