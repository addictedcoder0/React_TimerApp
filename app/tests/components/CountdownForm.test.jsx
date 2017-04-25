var React = require('react');
var ReactDOM = require('react-dom');

var expect = require('expect');
var $ = require('jquery');
var TestUtils =  require('react-addons-test-utils');
var CountdownForm = require('CountdownForm');

describe('CountdownForm',() => {
  it('should exist',() => {
    expect(CountdownForm).toExist();
  });

  it('it should call onSetCountdown if valid seconds entered ',() => {
    var spy = expect.createSpy();
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = '150';
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toHaveBeenCalledWith(150);
  });

  it('it should Not call onSetCountdown if Invalid seconds entered ',() => {
    var spy = expect.createSpy();
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = 'xyz';
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toNotHaveBeenCalled();
  });
});
