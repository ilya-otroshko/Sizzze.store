import React, { Component } from "react";
import Slider from "react-slick";

import SliderProduct from "./SliderProduct";


export default class ProductSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: props.images,
      blocks: [
        {id: 1}
      ],
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {


    const settings1 = {
      
      infinite: true,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
      asNavFor: this.state.nav2
    };
    const settings2 = {
      
      infinite: true,
      speed: 400,
      slidesToShow: 3,
      slidesToScroll: 1,
      adaptiveHeight: true,
      focusOnSelect: true,
      arrows:false,
      asNavFor: this.state.nav1,
      swipe: false
    };

    if(this.state.nav1 !== null)
    {
      var images = this.state.images.slice(1)
      console.log(images)
    return (

      <div className="productSlider">
        <Slider
          ref={slider => (this.slider1 = slider)}
          {...settings1}
          className="productBigSlider"
        >
          {images.map(image =>(
          <SliderProduct
          images={image.picture.big}
          blocks={this.state.blocks}
          key={image.id}
          count={image.id}/>
          ))}
        </Slider>

        <Slider
          ref={slider => (this.slider2 = slider)}
          {...settings2}
          className="productSmallSlider"
        >
          {images.map(image =>(
          <SliderProduct 
          images={image.picture.thumb}
          blocks={this.state.blocks}
          key={image.id}
          count={image.id}/>
          ))}
        </Slider>
      </div>
    );
    }
    return (
      <div className="productSlider">
        <Slider
          ref={slider => (this.slider1 = slider)}
          {...settings1}
          className="productBigSlider"
        />
        <Slider
          ref={slider => (this.slider2 = slider)}
          {...settings2}
          className="productSmallSlider"
        />
      </div>
    );
  }
}