import React from 'react';

const PoisListItem = ({poi, onPoiSelect}) => {
    const imageUrl = "http://placehold.it/300/f44336/000000";

    return (
        <li onClick={() => onPoiSelect(poi)} className="list-group-item"> 
            <div className = "video-list media">
                <div className = "media-left">
                    <img className = "media-object" src = {imageUrl} />
                </div>
                <div className = "media-body">
                    <div className = "media-heading"> {poi.venue.name}</div>
                </div>
            </div> 
        </li>
    );
};

export default PoisListItem;