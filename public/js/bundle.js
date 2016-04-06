'use strict';

var App = React.createClass({
  displayName: 'App',

  render: function render() {
    return React.createElement(
      'p',
      null,
      'Hello World'
    );
  }
});

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
