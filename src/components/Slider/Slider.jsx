import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import image1 from "../../components/images/1.jpg";
import image2 from "../../components/images/2.jpg";
import image3 from "../../components/images/3.jpg";
import "./slider.css"

function Slider() {

  return (

      <div class="carousel-wrapper">
            <Carousel infiniteLoop={true} useKeyboardArrows ={true} autoPlay={true} showThumbs={false} showIndicators={false}  showStatus={false} showArrows ={false} interval={3000}>
                <div>
                    <img src={image1} alt=""  className="slid" />
                </div>
                <div>
                    <img src={image2} alt=""  className="slid" />
                </div>
                <div>
                    <img src={image3} alt=""    className="slid" />
                </div>
            </Carousel>
        </div>

  );
}

export default Slider
