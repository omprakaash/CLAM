import React, { createClass } from 'react';
import { Link } from 'react-router-dom';

const Nav = createClass({
    displayName: 'Nav',

    render() {
        return (
            <nav className="main-nav">
                <Link className="main-nav__link" to="/">CLAM</Link>
                <div className="main-nav__menu-container">
                    <Link className="main-nav__link" to="/">Home</Link>
                </div>
            </nav>
        );
    }
});

export default Nav;
