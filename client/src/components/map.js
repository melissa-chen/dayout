import React, { Component } from 'react';

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
    }



    render() {
        return (
            <div id="map"></div>
        );
    }
}

export default Map;