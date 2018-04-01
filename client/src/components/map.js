import React, { Component } from 'react';

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
        console.log("map")
    }



    render() {
        return (
            <div id="map"></div>
        );
    }
}

export default Map;