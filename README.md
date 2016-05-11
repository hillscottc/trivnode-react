# Demo Express, React, and Webpack

## Overview

Webpack, Express, React+Redux


## Install and Run:
        
        $ npm install
        $ npm start
        
        
### For more debug log output
Uses the [debug](https://www.npmjs.com/package/debug) logging utility. You can set a system environment variable named DEBUG to see additional log output.

For example, to see all debugging messages, including express, babel, etc:

        $ DEBUG=* npm start

To see app-specific messages only:

        $ DEBUG=app:* npm start

## How it was built
1. Start with a good React app boilerplate. I went with [christianalfoni's webpack-express-boilerplate](http://www.christianalfoni.com/articles/2015_04_19_The-ultimate-webpack-setup). Mainly because its light on the server side (no Universal React), and the webpack configuration is clean.
2. Updated the bolierplates's dependencies with [ncu](https://www.npmjs.com/package/npm-check-updates).
3. Got the [Redux reddit async example](http://redux.js.org/docs/advanced/ExampleRedditAPI.html) working.

