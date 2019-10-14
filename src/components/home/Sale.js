import React from 'react'
import {NavLink} from 'react-router-dom'

import sale from '../../images/sale.jpg'


export default function Sale(){
  return (

      <section className="saleSelect">
          <img src={sale} alt="sale"/>
          <div>
          <NavLink 
                to="sale" 
                className="saleLink">
             <h4>
                  SALE!
              </h4>
            </NavLink>
            <NavLink 
                to="sale" 
                className="saleLink">
              <p>Show me!</p>
            </NavLink>
          </div>
      </section>

  )
}