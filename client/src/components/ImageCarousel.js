import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import image1 from './images/image1.jpg'
import image2 from './images/image2.png'
import image3 from './images/image3.png'


class ImageCarousel extends Component {
    render() {
        return (
            
            <Carousel infiniteLoop={true} interval={4000} showThumbs={false} width={'1080px'} autoPlay={true} transitionTime={500}>
                <div class>
                    <img src={image1} />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={image2} />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src={image3} />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>

        );
    }
}
export default ImageCarousel
