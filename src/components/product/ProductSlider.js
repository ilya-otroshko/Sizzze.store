import React, { Component } from "react";
import Slider from "react-slick";

import SliderProduct from "./SliderProduct";


export default class ProductSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counts: [
        {id: 1, name : 1.1},
        {id: 2, name : 1.2},
        {id: 3, name : 1.3},
        {id: 4, name : 1.4}
      ],
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
    const stok = [40, 41, 42, 43, 44]
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
    return (
      <div className="productSlider">
        <Slider
          ref={slider => (this.slider1 = slider)}
          {...settings1}
          className="productBigSlider"
        >
         {this.state.counts.map(count =>(
          <SliderProduct
          
          blocks={this.state.blocks}
          stok={stok}
          key={count.name}
          count={count.name}/>
          
          ))}

        </Slider>

        <Slider
          ref={slider => (this.slider2 = slider)}
          {...settings2}
          className="productSmallSlider"
        >
          {this.state.counts.map(count =>(
          <SliderProduct 
          
          blocks={this.state.blocks}
          stok={stok}
          key={count.name}
          count={count.name}/>
          
          ))}

        </Slider>
      </div>
    );
  }
}