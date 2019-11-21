import React,{Component} from 'react'
import Select from './Select'

import Image from 'react-image-webp';

export default class ChooseBrand extends Component{

  constructor(props) {
    super(props);
 
    this.state = {
    brandName: [
      {id: 'all', name: 'все'},
      {id: 'adidas', name: 'adidas'},
      {id: 'nike', name: 'nike'},
      {id: 'puma', name: 'puma'},
      {id: 'reebok', name: 'reebok'},
      {id: 'new-balance', name: 'new-balance'}
    ],
    modelName: [
      {id: 'all', name: 'все'},
      {id: '270', name: '270'},
      {id: '720', name: '720'},
      {id: 'air-force', name: 'Air Force'},
      {id: 'triple-s', name: 'Triple S'},
      {id: 'yeezy', name: 'Yeezy'}
    ]
  };
}

render() {
    window.addEventListener('scroll', function(){
      if(document.getElementsByClassName('footer').length > 0){
          document.getElementsByClassName('footer')[0].style.display="flex"
        if(window.pageYOffset > 1002){
          document.getElementsByClassName('footer')[0].style.display="flex"
          document.getElementsByClassName('leftArrivals')[0].style.display="flex"
          document.getElementsByClassName('rightArrivals')[0].style.display="flex"
        }
        if(window.pageYOffset < 1002){
          document.getElementsByClassName('footer')[0].style.display="none"
        }
      }
      }
    
  )
  
  return (
    <div className='wrapperChooseBrand'>
      <Image
          src={require('../../images/chBrand.jpeg')}
          webp={require('../../images/chBrand.webp')}
      />
      <section className="chooseBrand">
            <Select
            brandName={this.state.brandName}
            modelName={this.state.modelName}
            title1={"бренд: "}
            title2={"модель: "}
            colorIcon={"#f1d4d4"}
            brandValue={"все"}
            bg={"#484c7f"}/>
      </section>
    </div>
    
    )
  }
}