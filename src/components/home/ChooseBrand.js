import React from 'react'
import Select from './Select'

import fon from '../../images/fon1.jpg'


export default function ChooseBrand(){
  console.log(document.getElementsByClassName('leftArrivals').length)
  window.addEventListener('scroll', function(){
    document.getElementsByClassName('footer')[0].style.display="flex"
    if(document.getElementsByClassName('leftArrivals').length > 0){
      if(window.pageYOffset > 1002){
        document.getElementsByClassName('footer')[0].style.display="flex"
        document.getElementsByClassName('leftArrivals')[0].style.display="flex"
        document.getElementsByClassName('rightArrivals')[0].style.display="flex"
      }
      if(window.pageYOffset < 1002){
        document.getElementsByClassName('footer')[0].style.display="none"
      }
    }
})
  const brandName = new Array(6)
  .fill('')
  .map( (_, i) => ( {id:i, value:["all", "adidas", "nike", "puma", "reebok", "new-balance"]} ) )

  const modelName = new Array(6)
  .fill('')
  .map( (_, i) => ( {id:i, value:["all", "270", "720", "Air Force", "Triple S", "Yeezy"]} ) )
  
  return (
    <div className='wrapperChooseBrand'>
      <img src={fon} alt="fon"/>
      <section className="chooseBrand">
            <Select
            brandName={brandName}
            modelName={modelName}
            title1={"Brands: "}
            title2={"Models: "}
            colorIcon={"white"}
            bg1={'rgba(255, 255, 255, 0.6)'}
            bg2={'rgba(255, 255, 255, 0.6)'}/>
      </section>
    </div>
    
  )
}