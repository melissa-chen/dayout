import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'
import ItineraryList from './components/itinerary_list'
import myCarousel from './components/myCarousel';
import Toggle from './components/toggle'
import Map from './components/map'
// import ItineraryList from './components/itinerary_list'
// import MyCarousel from './components/MyCarousel';
import PoisList from './components/pois_list'
import PoiDetail from './components/poi_detail'


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
            pois: [],
            selectedPoi: null
         };
      
    }
    componentDidMount() {   
        console.log(foursquare) 
        foursquare.venues.explore(params)
          .then(res=> {
              console.log("index.js hello?");
            //   console.log(res);
            this.setState({ pois: res.response.groups[0].items });
            console.log(this.state.pois);
            this.setState( { selectedPoi: this.state.pois[0] })
            console.log ("done with index.js");
          });
      }
    

    render () {
        return (
            <div> 
                <SearchBar />
                <Toggle />
                <Map />
                < PoiDetail poi={this.state.selectedPoi}/>
                <div>
                    <div>Items:</div>
                </div>

                 {/* <MyCarousel items={this.state.items}/> */}
                < PoisList 
                    pois = {this.state.pois }
                    onPoiSelect = {selectedPoi => this.setState({selectedPoi})} 
                /> 

            </div>

            
        );
    }
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));



















