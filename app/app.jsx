var React = require('react');
var ReactDOM =  require('react-dom');

var { Route,Router, IndexRoute, hashHistory} = require('react-router');
var Main =  require('Main');

//Load Foundation css , we are using style! (to inject css in style tag) ;
//css!(to inform require module that this is a css)
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>

    </Route>
  </Router>
  ,document.getElementById('app')
);

/*
 modules needed to be installed for testing a react app

 karma@0.13.22 karma-chrome-launcher@0.2.2 karma-mocha@0.2.2 karma-mocha-reporter@2.0.0 karma-sourcemap-loader@0.3.7
 karma-webpack@1.7.0 mocha@2.4.5 expect@1.14.0 --save-dev
*/
