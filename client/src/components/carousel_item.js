import React from 'react';

const CarouselItem = ({item}) => {
    return (
           <div>
                <img src="http://placehold.it/300/f44336/000000" />
                <p className="img-responsive">{item.venue.name}</p>
            </div>  
    );
};

export default CarouselItem;