const express = require('express');
const app = express();
const pug = require('pug');
const db = ('db.js');

// port
var port = process.env.PORT || 8080;

// view engine
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

// public
app.use(express.static('public'));

// routes
app.get('/', (req, res) => {
  res.render('index', {
    title: 'FollowUp.Church | Follow up software to help churches keep track of new contacts and converts.'
  });
});

app.get('/login', (req, res) => {
  res.render('login', {
    title: 'FollowUp.Church | Login to your FollowUp.Church account.'
  });
});

app.get('/create', (req, res) => {
  res.render('create', {
    title: 'FollowUp.Church | Create your FollowUp.Church account.'
  });
});

app.get('/contacts', (req, res) => {
  res.render('contacts', {
    title: 'List of contacts | FollowUp.Church'
  });
});

// port number
app.listen(port, () => {
  console.log('Site is running at http://localhost:' + port);
});
