import React from 'react'
import Select from './Select'

import fon from '../../images/fon.jpg'


export default function ChooseBrand(){
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
            title2={"Models: "}/>
      </section>
    </div>
    
  )
}