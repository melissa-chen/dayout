import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'
import ItineraryList from './components/itinerary_list'
import myCarousel from './components/carousel';


var foursquare = require('react-foursquare')({
    clientID: 'LEDZJW5QGCFCKFQFB3OMT5UE1GSEFXYRB0L5QYFVJWOQYGXQ',
    clientSecret: 'C3CF0GOBEKST0QDEMU2M5MOTM0PV3YDE5GBQZVZOWRXLF11Y'  
  });

  var params = {
    "ll": "37.7749,-122.4194",
    "query": 'Blue Bottle'
  };



// Create a new component. Should produce some HTML
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            itinerary: [],
            items: []
         };
      
    }
    componentDidMount() {    
        foursquare.venues.explore(params)
          .then(res=> {
              console.log("hello?");
              console.log(res);
            this.setState({ items: res.response.groups[0].items });
            console.log(this.state.items);
          });
      }
    

    render () {
        return (
            <div> 
                <SearchBar />

                <div>
                    <div>Items:</div>

                    {/* { this.state.items.map(item=> { return <div key={item.referralId}>{item.venue.name}</div>}) } */}
                </div>

                <myCarousel items={this.state.items}/>
            </div>
        );
    }
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));



















