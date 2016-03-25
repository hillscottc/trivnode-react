# Hello World with Node, Express, and React

Node and npm handle the server-side components of the app. We will build a basic [Express](http://expressjs.com/) web framework serving [Jade](http://jade-lang.com/) templated files, which is the default for the [express-generator](http://expressjs.com/en/starter/generator.html). 

On the client-side, [React](https://facebook.github.io/react/) will be used for the View layer. React lets you write your client-side code in clean javascript components, rather than mucking around with multiple blocks of html and scripts.


## Set up the Express server

- Install [node](https://nodejs.org/en/) on your system. 
- Globally install [express-generator](http://expressjs.com/en/starter/generator.html)

        npm install express-generator -g

- Use express-generator to create a basic app structure. 

        $ express demo-react
        
           create : demo-react
           create : demo-react/package.json
           create : demo-react/app.js
           create : demo-react/public
           create : demo-react/public/images
           create : demo-react/routes
           create : demo-react/routes/index.js
           create : demo-react/routes/users.js
           create : demo-react/public/stylesheets
           create : demo-react/public/stylesheets/style.css
           create : demo-react/views
           create : demo-react/views/index.jade
           create : demo-react/views/layout.jade
           create : demo-react/views/error.jade
           create : demo-react/bin
           create : demo-react/bin/www
        
install dependencies:
        
        $ cd demo-react && npm install
        
run the app:
        
        $ DEBUG=demo-react:* npm start


Then load [http://localhost:3000/](http://localhost:3000/) in your browser to access the app.

## Set up the client-side React app

For React to work, it has to transpile it's .jsx componets. The easiest way to do this is with **In-browser transformation**. This method is not designed for production use, since it slows down the pages somewhat. But it's perfectly fine for dev and prototyping work. 

We will use Bower to gather the React and Babel scripts needed for transformation. 

Install Bower

        $ npm install bower -g

Initialize bower, accepting the defaults. 
        
        $ bower init

We will make one customization here. Let's put the bower_components directory into the `public` dir, for convenience.

- Create a `.bowerrc` file in the root
- In  the `.bowerrc`, write this one line: `{"directory" : "public/bower_components"}`
- Then install your bower components 

        bower install babel --save
        bower install react --save
        

## Configure the Jade templates for React
Here's how you set up your Jade templates to include your React components.

The main `views/layout.jade` needs to be updated to:

- source the react script, 
- source the babel browser transformation script,
- and provide a new block called called `morejs`

See the new bottom three lines in `layout.jade`

        doctype html
        html
          head
            title= title
            link(rel='stylesheet', href='/stylesheets/style.css')
          body
            block content
            script(src='/bower_components/react/react.min.js')
            script(src='/bower_components/babel/browser.min.js')
            block morejs

In our `views/index.jade`, 

- Add a `#greeter` element, which is where React is going to inject our component. 
- Add a reference to that new component in the `morejs` block. Note the `type="text/babel"`
      
        extends layout
        
        block content
          h1= title
          p Welcome to #{title}
          #greeter
        
        block morejs
          script(src='/javascripts/helloworld.jsx', type="text/babel")
  
And the greeter component React JSX code itself, at `/public/javascripts/helloworld.jsx` is:  
  
        React.render(
            <h1>Hello, world from React.js!</h1>,
            document.getElementById('greeter')
        );


That's it. Refresh your browser at [http://localhost:3000/](http://localhost:3000/) . You should see

---
### Express

Welcome to Express

Hello, world from React.js!

---
