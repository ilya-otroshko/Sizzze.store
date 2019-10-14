import React from 'react'

import ChooseBrand from '../components/home/ChooseBrand'
import NewSlider from '../components/home/NewSlider'
import Sale from '../components/home/Sale'
import NewArrivals from '../components/home/NewArrivals'

export default function Home(){
  return (
      <div>     
      <ChooseBrand />
      <NewSlider />
      <Sale />
      <NewArrivals />
      </div>

  )
}