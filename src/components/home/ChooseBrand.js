import React from 'react'
import Select from './Select'

import fon from '../../images/fon.jpg'


export default function ChooseBrand(){
  return (
    <div className='wrapperChooseBrand'>
      <img src={fon} alt="fon"/>
      <section className="chooseBrand">
            <Select />
      </section>
    </div>
    
  )
}