var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
    it('should exists', ()=>{
        expect(CountdownForm).toExist();
    });

    it('should call onSetCountdown if valid seconds entered', ()=>{
        
        // Giả lập thay đổi giá trị second, test xem chạy đúng ko
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);

        var $el = $(ReactDOM.findDOMNode(countdownForm));
        countdownForm.refs.seconds.value = '109';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(109);

    });

    it('should not call onSetCountdonw  if INVALID seconds entered', ()=>{
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        var $el = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value="khongphaiso";
        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toNotHaveBeenCalled();
    })
});