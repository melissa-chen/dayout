import React from 'react';

const CarouselItem = ({item}) => {
    return (
        <div className="item"> 
            <div className = "col-xs-3">
                <div className = "place-heading"> <img src="http://placehold.it/300/f44336/000000" className='img-responsive' /> {item.venue.name}</div>
            </div> 
        </div>
    );
};

export default CarouselItem;