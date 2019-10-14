import React, { Component } from "react";
import Slider from "react-slick";
import {CSSTransition,TransitionGroup,} from 'react-transition-group';

import img1 from '../../images/1.png'
import img101 from '../../images/1.1.jpg'
import img2 from '../../images/2.png'
// import img202 from '../../images/2.2.jpg'
import img3 from '../../images/3.png'
// import img303 from '../../images/3.3.jpg'
import img4 from '../../images/4.jpg'
// import img404 from '../../images/4.4.jpg'
import img5 from '../../images/5.png'
// import img505 from '../../images/5.5.jpg'
import img6 from '../../images/6.png'
import img7 from '../../images/7.png'
import img8 from '../../images/8.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faSlash } from '@fortawesome/free-solid-svg-icons'


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

  state = {
    isImgHover: false,
    color: 'grey'
  };

  toggleList = () => {
       
      this.setState({
        isImgHover: !this.state.isImgHover
      });
  }; 

  render() {
    console.log(this.state.isImgHover)
    const { isImgHover } = this.state;
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
          <div>
            <div className="blockInSlider"
            onMouseEnter= {() => this.toggleList(isImgHover)}
            onMouseLeave={() => this.toggleList(!isImgHover)}>
              <div>

              <TransitionGroup>
                    {isImgHover && (

                    <CSSTransition
                    timeout={{
                      enter:200,
                      exit:0
                      }} 
                        classNames="showImg">
                          <img src={img101} alt="" style={{height:"219.59px"}}/> 
                          </CSSTransition>    
                    )}
  
                    {!isImgHover && (

                    <CSSTransition
                        timeout={{
                          enter:200,
                          exit:0
                        }}
                        classNames="showImg">
                          <img src={img1} alt=""/> 
                          </CSSTransition>    
                    )}
                  </TransitionGroup>

              </div>
             

              <div className="infoSlider">
                <h3>Ugg Neumel Black</h3>
                <p>1650uah</p>
                <span>In stok: 40, 41, 42, 43</span>
              </div>
            </div>
          </div>
          
          <div>
            <div className="blockInSlider">
              <img src={img2} alt=""/>
              <div>
                <h3>hello</h3>
              </div>
            </div>
          </div>

          <div>
            <div className="blockInSlider">
              <img src={img3} alt=""/>
              <div>
                <h3>hello</h3>
              </div>
            </div>
          </div>

          <div>
            <div className="blockInSlider">
              <img src={img4} alt=""/>
              <div>
                <h3>hello</h3>
              </div>
            </div>
          </div>

          <div>
            <div className="blockInSlider">
              <img src={img5} alt=""/>
              <div>
                <h3>hello</h3>
              </div>
            </div>
          </div>

          <div>
            <div className="blockInSlider">
              <img src={img6} alt=""/>
              <div>
                <h3>hello</h3>
              </div>
            </div>
          </div>

          <div>
            <div className="blockInSlider">
              <img src={img7} alt=""/>
              <div>
                <h3>hello</h3>
              </div>
            </div>
          </div>

          <div>
            <div className="blockInSlider">
              <img src={img8} alt=""/>
              <div>
                <h3>hello</h3>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
