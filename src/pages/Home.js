import React from 'react'

import ChooseBrand from '../components/home/ChooseBrand'
import NewSlider from '../components/home/NewSlider'
import Sale from '../components/home/Sale'
import NewArrivals from '../components/home/NewArrivals'
import Footer from '../components/footer/Footer'

export default function Home(){

  return (
      <div>     
      <ChooseBrand />
      <NewSlider />
      <Sale />
      <NewArrivals />
      <Footer />
      </div>
  )
}