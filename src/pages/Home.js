import React from 'react'

import ChooseBrand from '../components/home/ChooseBrand'
import NewSlider from '../components/home/NewSlider'
import Sale from '../components/home/Sale'
import NewArrivals from '../components/home/NewArrivals'

export default function Home(){
 
        window.addEventListener('scroll', function(){
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
  
  return (
      <div>     
      <ChooseBrand />
      <NewSlider />
      <Sale />
      <NewArrivals />
      </div>
  )
}