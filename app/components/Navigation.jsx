var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = (props) => {
    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text">React Timer App</li>                
                    <li>
                        <IndexLink to="/" activeClassName>Timer</IndexLink>
                    </li>
                    <li>
                        <Link to="/" activeClassName>Countdown</Link>                        
                    </li>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                    <li className="menu-text">
                        Create by <a href="https://github.com/thanhdungfb" target="_blank">Alex Lee</a>
                    </li>
                </ul>
            </div>
        </div>
    )
};

module.exports = Navigation;