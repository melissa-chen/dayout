// import React, { Component }  from 'react';
// import CarouselItem from './carousel_item';
// import { Carousel } from 'react-responsive-carousel';

// class MyCarousel extends Component { 
//     // { this.state.items.map(item=> { return <div key={item.referralId}>{item.venue.name}</div>}) }
//     constructor(props) {
//         // console.log(props);
//         var propsflag = props;
//         console.log("!!!!!!!!!!!!!!!!");
//         super(props);
//         this.state = { carouselItems: [] };
//         console.log("proooooops");
//         console.log(props.items);
//         this.state.carouselItems = props.items; 
//         // this.mapping();
//         // this.state.carouselItems = this.state.carouselItems.map((item) => {
//         const carouselItems = this.state.carouselItems.map((item) => {
//             return ( 
//                 <CarouselItem 
//                     key = {item.referralId}
//                     item = {item} /> 
//             );
//         }); 

//         // console.log("MAPPING");
//         // console.log(carouselItems );
//     }
    
//     // mapping(){
//     //     this.state.carouselItems = this.state.carouselItems.map((item) => {
//     //         return ( 
//     //             <CarouselItem 
//     //                 key = {item.referralId}
//     //                 item = {item} /> 
//     //         );
//     //     }); 

//     //     console.log("MAPPING");
//     //     console.log(this.state.carouselItems );
//     // }
    

//     render() {
//         if (!this.propsflag) {
//            return <div> Loading... </div>
//         }
//         return (
//             <Carousel>
//                     {/* <div>
//                         <img src="http://placehold.it/300/f44336/000000" />
//                         <p className="legend">Legend 1</p>
//                     </div>

//                  <div>
//                         <img src="http://placehold.it/300/f44336/000000" />
//                         <p className="legend">Legend 1</p>
//                     </div><div>
//                         <img src="http://placehold.it/300/f44336/000000" />
//                         <p className="legend">Legend 1</p>
//                     </div> */}

//                     <div> 
//                         <img src="http://placehold.it/300/f44336/000000" />
//                         <p> { this.carouselItems } </p>
//                      </div>
//             </Carousel>
//         );
//     }

//     // return (
//     //     <ul className = "col-md-4 list-group">
//     //         {carouselItems}
//     //     </ul>
//     // );


// };

// export default MyCarousel;






import React from 'react';
import CarouselItem from './carousel_item';
import { Carousel } from 'react-responsive-carousel';

const MyCarousel = (props) => {
    console.log("WHAT IS PROPS?");
    console.log(props.items);
    console.log(props.items.length);
    if (props.items.length <= 0) {
        console.log("no props!!");
        return <div> Loading... </div>
    }
    else {
        const carouselItems = props.items.map((item) => {
            return (
                <CarouselItem
                key = {item.referralId}
                item = {item} /> 
            );
        });

        console.log("u better have props");
        console.log(carouselItems);

        var rows = [];
        for (var i = 0; i < carouselItems.length; i++) {
            rows.push( <div key={carouselItems[i].props.item.referralId} >
                <img src="http://placehold.it/300/f44336/000000" />
                <p className="img-responsive">{carouselItems[i].props.item.venue.name}</p>
            </div>  );
        }
        return <Carousel>{rows}</Carousel>;

    }
    
};

export default MyCarousel;