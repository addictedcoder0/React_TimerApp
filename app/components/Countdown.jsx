var React = require('react');
var CountdownForm = require('CountdownForm');
var Clock = require('Clock');

var Countdown =  React.createClass({
  getInitialState: function(){
    return {
      count: 0,
      countdownStatus:'stopped'
    };
  },
// this function will be executed once the states are changed/updated
  componentDidUpdate : function(prevProps , prevState){
    if(this.state.countdownStatus !== prevState.countdownStatus){
      switch(this.state.countdownStatus){
        case 'started' : this.startTimer();
            break;
        case 'paused' : this.pauseTimer(prevState.count);
            break;
        case 'stopped' : alert(prevState.count);
            break;
      }
    }
  },

  startTimer : function(){
    this.timer = setInterval (()=> {
      var newCount =  this.state.count -1 ;
      this.setState({
        count:  newCount >=0 ? newCount : 0
      });
    },1000);
  },

  pauseTimer : function(seconds){
    this.setState({
      count: seconds ,
      countdownStatus : 'stopped'
    });
  },

  handleSetCountDown : function(seconds){
    if(seconds){
      this.setState({
        count : seconds,
        countdownStatus:'started'
      });
    }else{
      this.setState({
        countdownStatus : 'paused'
      });
    }
  },
  render : function(){
    var {count} = this.state;
    return (
      <div>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={this.handleSetCountDown}/>
      </div>
    );
  }
});

module.exports = Countdown;
