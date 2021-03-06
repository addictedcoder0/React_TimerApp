var React = require('react');
//var jQuery = require('jquery');
var Clock =  React.createClass({
  getDefaultProps : function(){
    totalSeconds : 0;
  },
  PropTypes : {
   totalSeconds : React.PropTypes.number
 },

  formatSeconds : function(totalSeconds){
    var seconds = totalSeconds % 60;
    var minutes = Math.floor(totalSeconds / 60);
    if(seconds < 10){
      seconds = '0' + seconds;
    }
    if(minutes < 10){
      minutes = '0' + minutes;
    }
    return minutes +':'+seconds;
  },

  render : function(){
    var {totalSeconds} = this.props;
    return (
      <div className='clock'>
        <div className='clock-text'>
          <span>{this.formatSeconds(totalSeconds)}</span>
        </div>
      </div>
    );
  }
});

module.exports = Clock;
