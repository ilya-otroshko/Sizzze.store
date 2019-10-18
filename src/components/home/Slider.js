import React, { Component } from "react";
import Slider from "react-slick";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faSlash } from '@fortawesome/free-solid-svg-icons'
import SlideBlock from "./SlideBlock";


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="nextArrow"
        onClick={onClick}> 
      <FontAwesomeIcon 
      icon={faChevronRight} 
      />
      <div className="hoverNextIcon">       
        <FontAwesomeIcon 
      icon={faSlash} 
      />
      </div>

      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const {onClick } = props;
    return (
        <div
        className="prevArrow"
        onClick={onClick}> 
       <FontAwesomeIcon 
      icon={faChevronLeft} />
      </div>
    );
  }


export default class SimpleSlider extends Component {

  // state = {
  //   isImgHover: false,
  //   color: 'grey'
  // };

  // toggleList = () => {
       
  //     this.setState({
  //       isImgHover: !this.state.isImgHover
  //     });
  // }; 
 
  render() {
    const counts = new Array(6)
    .fill('')
    .map( (_, i) => ( {id:i + 1} ) )
    
    const blocks = new Array(1)
    .fill('')
    .map( (_, i) => ( {id:i + 1} ) )
    const stok = [40, 41, 42, 43, 44]
   
    // const { isImgHover } = this.state;
   
    const settings = {
      
      infinite: true,
      speed: 400,
      slidesToShow: 5,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      initialSlide: 0,
      lazyLoad: true,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="slickSlider">
        <Slider {...settings}>
  
          {counts.map(count =>(
          <SlideBlock 
          
          blocks={blocks}
          name="Ugg Neumel Black"
          price="1650"
          stok={stok}
          key={count.id}
          count={count.id}/>
          
          ))}
         
        </Slider>
      </div>
    );
  }
}
