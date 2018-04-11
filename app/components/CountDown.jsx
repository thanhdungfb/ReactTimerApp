var React = require('react');
var Clock = require('Clock');

var CountDown = React.createClass({
    render: function () {
        return (
            <div>
                <Clock totalSeconds={301}/>
                CountDown()
            </div>
        );
    }
});

module.exports = CountDown;