import React from 'react';
import CarouselItem from './carousel_item';
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component { 
    // { this.state.items.map(item=> { return <div key={item.referralId}>{item.venue.name}</div>}) }

    const carouselItems = props.items.map((item) => {
        return ( 
            <CarouselItem 
                key = {item.referralId}
                item = {item} /> 
        );
    }); 

    

    // return (
    //     <ul className = "col-md-4 list-group">
    //         {carouselItems}
    //     </ul>
    // );

    return (
        <Carousel> 

                <div>
                    <img src="assets/1.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>
         
        </Carousel>
    );

});

export default myCarousel;