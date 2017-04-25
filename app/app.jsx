var React = require('react');
var ReactDOM =  require('react-dom');

var { Route,Router, IndexRoute, hashHistory} = require('react-router');
var Main =  require('Main');
var Countdown = require('Countdown');
var Timer = require('Timer');

//Load Foundation css , we are using style! (to inject css in style tag) ;
//css!(to inform require module that this is a css)
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="countdown" component={Countdown} />
      <IndexRoute component={Timer} />
    </Route>
  </Router>
  ,document.getElementById('app')
);

/*
 modules needed to be installed for testing a react app

 karma karma-chrome-launcher karma-mocha karma-mocha-reporter karma-sourcemap-loader
 karma-webpack karma-jquery mocha expect --save-dev
*/
