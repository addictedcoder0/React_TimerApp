var React = require('react');
var ReactDOM = require('react-dom');

var expect = require('expect');
var $ = require('jquery');
var TestUtils =  require('react-addons-test-utils');
var Countdown = require('Countdown');

describe('Countdown',() => {
  it('should exist',() => {
    expect(Countdown).toExist();
  });

  it('it should call onSetCountdown if valid seconds entered ',() => {
    var spy = expect.createSpy();
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = '150';
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toHaveBeenCalledWith(150);
  });
});
