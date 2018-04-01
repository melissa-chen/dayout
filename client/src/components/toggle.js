import React, { Component } from 'react';

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
    addMarker();
    var markers = [
      {lat: 34.037186, lng: -118.440717},
      {lat: 34.065662, lng: -118.443806},
      {lat: 34.065362, lng: -118.446806},
      {lat: 34.055662, lng: -118.463806}
    ];
    displayPOI(markers);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

export default Toggle;