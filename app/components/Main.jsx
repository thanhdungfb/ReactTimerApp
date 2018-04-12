var React = require('react');
var Navigation = require('Navigation');

var Main = (props) => {
    return (
        <div>
            <Navigation/>
            <div className="row">
                <div className="columns small-center medium-6 large-4 large-center center">
                    {props.children}
                </div>
            </div>
        </div>
    )
};
module.exports = Main;