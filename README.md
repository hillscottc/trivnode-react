# Demo with Node, Express, React, and Webpack

1. Begun with [christianalfoni's webpack-express-boilerplate](http://www.christianalfoni.com/articles/2015_04_19_The-ultimate-webpack-setup).
2. Updated dependencies with [ncu](https://www.npmjs.com/package/npm-check-updates).
3. Got the [Redux reddit async example](http://redux.js.org/docs/advanced/ExampleRedditAPI.html) working.

## Overview
Node and npm handle the server-side components of the app. We will build a basic [Express](http://expressjs.com/) web framework serving [Jade](http://jade-lang.com/) templated files, which is the default for the [express-generator](http://expressjs.com/en/starter/generator.html). 

On the client-side, [React](https://facebook.github.io/react/) will be used for the View layer. React lets you write your client-side code in clean javascript components, rather than mucking around with multiple blocks of html and scripts.

## Install and Run:
        
        $ npm install
        $ npm start
        
        
### For more debug log output
Uses the [debug](https://www.npmjs.com/package/debug) logging utility. You can set a system environment variable named DEBUG to see additional log output.

For example, to see all debugging messages, including express, babel, etc:

        $ DEBUG=* npm start

To see app-specific messages only:

        $ DEBUG=app:* npm start


