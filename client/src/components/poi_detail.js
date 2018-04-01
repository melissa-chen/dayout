import React from 'react';

const  PoiDetail = ({poi}) => {
    if (!poi) {
        return <div> Loading... </div>;
    }
    const poiId = poi.referralId;
   
    return (
        <div className="poi-detail col-md-8">
            <div className="details">
                <div> {poi.venue.name} </div>
            </div>

        </div>
    );
    
};

export default PoiDetail;