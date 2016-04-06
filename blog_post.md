# Demo with Node, Express, React, and Webpack

Node and npm handle the server-side components of the app. We will build a basic [Express](http://expressjs.com/) web framework serving [Jade](http://jade-lang.com/) templated files, which is the default for the [express-generator](http://expressjs.com/en/starter/generator.html). 

On the client-side, [React](https://facebook.github.io/react/) will be used for the View layer. React lets you write your client-side code in clean javascript components, rather than mucking around with multiple blocks of html and scripts.


## Set up the Express server

- Install [node](https://nodejs.org/en/) on your system. 
- Globally install [express-generator](http://expressjs.com/en/starter/generator.html)

        npm install express-generator -g

- Use express-generator to create a basic app structure. 

        $ express demo-react
        

install dependencies:
        
        $ cd demo-react && npm install
        
run the app:
        
        $ DEBUG=demo-react:* npm start


Then load [http://localhost:3000/](http://localhost:3000/) in your browser to access the app.


## A better file structure
I prefer to cleanly separate client and server code.
        
        - demo-react
            package.json
            .babelrc
            webpack.config.js
            - client
                - public
                    - js
                        bundle.js
                - src
                    app.js
            - server
                server.js
                app.js
                + routes
                + views


## Set up Babel
Babel is used for transpiling ECMAScript 6 and JSX code.

Create a `.babelrc` file containing:

        {
          "presets": [
            "es2015",
            "react"
          ]
        }


## Set up Webpack
Webpack uses Babel to transpile. Configure it to point to the proper directories:

Create a `webpack.config.js` file containing:

        var path = require('path');
        
        module.exports = {
          entry: path.resolve(__dirname, './client/src/app.js'),
          output: {
            path: path.resolve(__dirname, './client/public/js'),
            filename: 'bundle.js'
          },
        
          module: {
            loaders: [
              {
                test: /src\/.+.js$/,
                exclude: /node_modules/,
                loader: 'babel'
              }
            ]
          }
        };


