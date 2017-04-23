var webpackConfig = require('./webpack.config.js');

module.exports = function(config){
  config.set({
    browsers : ['Chrome'],
    singleRun : true,
    frameworks : ['mocha'],
    files : ['app/tests/**/*.test.jsx'],
    preprocessors :{
      'app/tests/app.test.jsx' : ['webpack','sourcemap'],
      "app/tests/**/*.test.js": ["webpack", "sourcemap"]
    },
    reporters : ['mocha'],
    client : {
      mocha :{
        timeout : '5000'
      }
    },
    webpack: webpackConfig,
    webpackServer : {
      noInfo : true
    }
  });
};
