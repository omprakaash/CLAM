import React, {createClass} from 'react';
import Lab from 'app/components';

const Home = createClass({
    displayName: 'Home',
    currentRoom: 'B240',
    roomNumbers: [
        'B220',
        'B230',
        'B240',
        'B250',
        'B260',
        'B270'
    ],

    /**
     * Switches the currently displayed room by making a get request to the
     * backend api to retrieve the proper data, and then passing this data
     * into a lab render component.
     * @param  {string} roomNumber The room which should be rendered
     * @return {null}            no return
     */
    switchRoom(roomNumber) {
        this.currentRoom = roomNumber;
    },

    /**
     * Renders a link that, upon a click, will switch the screen to render a
     * display of statistics relating to the lab's usage.
     * @param  {int} roomNumber the number of the room to render
     * @return {jsx}            the html
     */
    renderLabSelector(roomNumber, index) {
        // TODO: Create a new jsx file responsible for rendering each of the
        // labs using requests from the database.
        return (<td key={roomNumber}>
            <a className="home__green-highlight" href="#" onClick={(e) => this.switchRoom(roomNumber)}>{roomNumber}</a>
        </td>)
    },

    /**
     * Takes the array of room numbers that need to be displayed, and renders
     * each lab selector by mapping the numbers to the renderLab function
     * @return {jsx} the set of rooms
     */
    renderLabSelectors() {
        return this.roomNumbers.map(this.renderLabSelector);
    },

    /**
     * Renders the page.
     * @return {jsx} The page
     */
    render() {
        const {onClickUser, selectedUser, usersList} = this.props;

        return (<div>
            <div className="home__banner">
                <h1 className="home__banner-heading">CLAM</h1>
                <div className="home__tagline">
                    A Computer Lab Activity Monitor
                </div>
                <div className="home__lab-select">
                    <table>
                        <tbody>
                            <tr>
                                {this.renderLabSelectors()}
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Lab name={this.currentRoom} />
            </div>
        </div>);
    }
});

export default Home;
