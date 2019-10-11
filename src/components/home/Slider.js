import React, { Component } from "react";
import Slider from "react-slick";
import img1 from '../../images/1.png'
import img2 from '../../images/2.png'
import img3 from '../../images/3.png'
import img4 from '../../images/4.jpg'
import img5 from '../../images/5.png'
import img6 from '../../images/6.png'
import img7 from '../../images/7.png'
import img8 from '../../images/8.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoePrints } from '@fortawesome/free-solid-svg-icons'



function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="nextArrow"
        onClick={onClick}
      > <FontAwesomeIcon 
      icon={faShoePrints} 
      /></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const {onClick } = props;
    return (
        <div
        className="prevArrow"
        onClick={onClick}
      > <FontAwesomeIcon 
      icon={faShoePrints} 
      /></div>
    );
  }


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 400,
      slidesToShow: 5,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div className="slickSlider">
        <Slider {...settings}>
          <div>
            <img src={img1} alt=""/>
          </div>
          <div>
          <img src={img2} alt=""/>
          </div>
          <div>
          <img src={img3} alt=""/>
          </div>
          <div>
          <img src={img4} alt=""/>
          </div>
          <div>
          <img src={img5} alt=""/>
          </div>
          <div>
          <img src={img6} alt=""/>
          </div>
          <div>
          <img src={img7} alt=""/>
          </div>
          <div>
          <img src={img8} alt=""/>
          </div>
        </Slider>
      </div>
    );
  }
}
