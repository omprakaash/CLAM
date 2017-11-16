import React, {createClass} from 'react';
import Users from 'app/components/users';

const Home = createClass({
    displayName: 'Home',
    roomNumbers: ['B220','B230','B240','B250','B260','B270'],

    /**
     * Renders the html for a single set of lab computers. Takes a room number
     * in order to specify the room.
     * @param  {int} roomNumber the number of the room to render
     * @return {jsx}            the html
     */
    renderLab(roomNumber, index) {
      return (<h1 key={roomNumber}>{roomNumber}</h1>)
    },

    /**
     * Takes the array of room numbers that need to be displayed, and renders
     * each one by mapping the numbers to the renderLab function
     * @return {jsx} the set of rooms
     */
    renderLabs() {
        return this.roomNumbers.map(this.renderLab);
    },

    /**
     * Renders the page.
     * @return {jsx} The page
     */
    render() {
        const {onClickUser, selectedUser, usersList} = this.props;

        return (
            <div>
                <div className="home__banner">
                    <div className="home__logo-image"/>
                    <h1 className="home__banner-heading">CLAM</h1>
                    <div className="home__tagline">
                        A Computer Lab Activity Monitor</div>
                </div>
                {this.renderLabs()}
                <div className="home__main-container">
                    <Users onClickUser={onClickUser} selectedUser={selectedUser} usersList={usersList}/>
                </div>
            </div>
        );
    }
});

export default Home;
