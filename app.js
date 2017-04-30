const express = require('express');
const app = express();
const port = process.env.PORT || 3338;

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

app.get('/sign-up', (req, res) => {
  res.render('sign-up', {
    title: 'FollowUp.Church | Create your FollowUp.Church account.'
  });
});

// port number
app.listen(3000, () => {
  console.log('Site is running at http://localhost:3000');
});
