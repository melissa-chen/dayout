import React from 'react';
import ItineraryItem from './itinerary_item';

const ItineraryList = (props) => {
    
    const places = props.itinerary.map((itinerary_item) => {
        return (
            // <ItineraryItem 
            //     onVideoSelect={props.onPlaceSelect}
            //     key = {video.etag}
            //     video={video} />
            <ItineraryItem /> 

            
        );
    });

    return (
        <ul className = "col-md-4 list-group">
            {itineraryItems}
        </ul>
    );
};

export default ItineraryList;