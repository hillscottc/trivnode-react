/* eslint no-console: 0 */
'use strict';

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config.js');
const config = require('./config');
const app = express();
const api = require('./api');


var passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;
const expressSession = require('express-session');
app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());




// passport/login.js
passport.use('login', new LocalStrategy({
      passReqToCallback : true
    },
    function(req, username, password, done) {


      return done(null, {user_id: "1", username: "shill"});


      // check in mongo if a user with username exists or not
      // User.findOne({ 'username' :  username },
      //     function(err, user) {
      //       // In case of any error, return using the done method
      //       if (err)
      //         return done(err);
      //       // Username does not exist, log error & redirect back
      //       if (!user){
      //         console.log('User Not Found with username '+username);
      //         return done(null, false,
      //             req.flash('message', 'User Not found.'));
      //       }
      //       // User exists but wrong password, log the error
      //       if (!isValidPassword(user, password)){
      //         console.log('Invalid Password');
      //         return done(null, false,
      //             req.flash('message', 'Invalid Password'));
      //       }
      //       // User and password both match, return user from
      //       // done method which will be treated like success
      //       return done(null, user);
      //     }
      // );
    })
);



app.post('/login',
    passport.authenticate('login'),
    function(req, res) {
      console.log("Login", req.user);
      res.redirect('/' + req.user.username);
    });





// Enable api routes
app.use('/api', api);

if (config.isDeveloping) {
  const compiler = webpack(webpackConfig);
  const middleware = webpackMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.get('*', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
    res.end();
  });
} else {
  app.use(express.static(__dirname + '/dist'));
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}

app.listen(config.port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port', config.port);
});
