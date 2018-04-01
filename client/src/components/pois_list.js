import React from 'react';
import PoisListItem from './pois_list_item';

const PoisList = (props) => {
    const poiItems = props.pois.map((poi) => {
        return (
            <PoisListItem 
                onPoiSelect = {props.onPoiSelect}
                key = {poi.referralId}
                poi={poi} />
        );
    });

    return (
        <ul className = "col-md-12 list-group">
            {poiItems}
        </ul>
    );
};

export default PoisList; 