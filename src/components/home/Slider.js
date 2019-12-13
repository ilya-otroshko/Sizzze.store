import React, { Component } from "react";
import Slider from "react-slick";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
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

    document.addEventListener('keydown', function(event){

      if (event.keyCode === 37 && document.getElementsByClassName('prevArrow').length > 0) 
        document.getElementsByClassName('prevArrow')[0].click();
    
        if (event.keyCode === 39 && document.getElementsByClassName('nextArrow').length > 0) 
        document.getElementsByClassName('nextArrow')[0].click();
      
    })
  

export default class SimpleSlider extends Component {


  constructor(props) {
    super(props);
 
    this.state = {
      counts: [
      {id: 1},
      {id: 2},
      {id: 3},
      {id: 4},
      {id: 5},
      {id: 6}
    ],
    blocks: [
      {id: 1}
    ]
  };
}
 
  render() {
    
    const stok = [40, 41, 42, 43, 44]
   
    const settings = {
      
      infinite: true,
      speed: 400,
      slidesToShow: 5,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      initialSlide: 0,
      lazyLoad: true,
      swipe:false,
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
            initialSlide: 2,
            swipe:true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            swipe:true
          }
        }
      ]
    };
    return (
      <div className="slickSlider">
        <Slider {...settings}>
  
          {this.state.counts.map(count =>(
          <SlideBlock 
          
          blocks={this.state.blocks}
          name="ugg neumel black"
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
