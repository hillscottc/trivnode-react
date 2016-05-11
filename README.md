# Demo with Node, Express, React, and Webpack


Begun with a [christianalfoni's webpack setup](http://www.christianalfoni.com/articles/2015_04_19_The-ultimate-webpack-setup)

Node and npm handle the server-side components of the app. We will build a basic [Express](http://expressjs.com/) web framework serving [Jade](http://jade-lang.com/) templated files, which is the default for the [express-generator](http://expressjs.com/en/starter/generator.html). 

On the client-side, [React](https://facebook.github.io/react/) will be used for the View layer. React lets you write your client-side code in clean javascript components, rather than mucking around with multiple blocks of html and scripts.


## install dependencies:
        
        $ npm install
        
## build the app
Webpack is used to transpile the javascript in `client\src` into a file at  `client\public\js\bundle.js` 

        $ npm run build
        
        
##  run the app:
        
        $ DEBUG=demo-react:* npm start
