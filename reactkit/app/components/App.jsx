import React, { createClass } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Nav from 'app/components/Nav';
import Home from 'app/components/Home';

const App = createClass({
    displayName: 'App',

    render() {
        const Component = typeof window === 'undefined' ? 'div' : BrowserRouter;

        return (
            <Component>
                <div>
                    <Nav />
                    <Route exact path="/" component={Home}/>
                </div>
            </Component>
        );
    }
});

export default App;
