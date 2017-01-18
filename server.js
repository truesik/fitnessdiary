// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const models = require('./server/models');
const LocalStrategy = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');

// Get our API routes
const api = require('./server/routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// Authentication
app.use(session({
  secret: 'GSD5346sdS7gDSjlsdjgSDg#$!(L',
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

// Passport config
passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  models.user.findById(id)
    .then(user => done(null, user))
    .catch(error => done(error));
});

passport.use('login', new LocalStrategy((username, password, done) => {
  models.user.findOne({
    where: {
      username,
      password
    }
  }).then(user => done(null, user))
    .catch(error => done(error));
}));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
// });

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
