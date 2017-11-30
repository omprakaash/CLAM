import React, {createClass} from 'react';
import {Link} from 'react-router-dom';

/**
 * Class for rendering a basement lab.
 * @type {Lab}
 */
const Lab = createClass({

    /**
     * Renders a lab layout of seats onto the page, according to the name given.
     * @return {jsx} for the page
     */
    render() {
        return (<h1>{this.props.name}</h1>);
    }
});

export default Lab;
