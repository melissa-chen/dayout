import React,{ Component }  from 'react';
import CarouselItem from './carousel_item';
import { Carousel } from 'react-responsive-carousel';

class myCarousel extends Component { 
    // { this.state.items.map(item=> { return <div key={item.referralId}>{item.venue.name}</div>}) }
    constructor(props) {
        console.log(props);
        console.log("!!!!!!!!!!!!!!!!");
        super(props);
        this.state = { carouselItems: '' };
        this.mapping();
    }
    // mapping() {
    //     this.state.carouselItems = props.items.map((item) => {
    //         return ( 
    //             <CarouselItem 
    //                 key = {item.referralId}
    //                 item = {item} /> 
    //         );
    //     }); 
    // }
 

    // render() {
    //     return (
    //         <Carousel>
    //                 <div>
    //                     <p className="legend">Legend 1</p>
    //                 </div>

    //                 <div>
    //                     ???
    //                     </div>
             
    //         </Carousel>
    //     );
    // }

    // render() {
    //     return (
    //         <Carousel>
    //             <div>
    //                 <img src="assets/1.jpeg" />
    //                 <p className="legend">Legend 1</p>
    //             </div>
    //             <div>
    //                 <img src="assets/2.jpeg" />
    //                 <p className="legend">Legend 2</p>
    //             </div>
    //             <div>
    //                 <img src="assets/3.jpeg" />
    //                 <p className="legend">Legend 3</p>
    //             </div>
    //         </Carousel>
    //     );
    // }

    render() {
        return (
            <div>
                <input 
                    value = {this.state.term}
                    onChange={event => this.setState({ term: event.target.value })} />
            </div>
        );
    }

    // return (
    //     <ul className = "col-md-4 list-group">
    //         {carouselItems}
    //     </ul>
    // );


};

export default myCarousel;