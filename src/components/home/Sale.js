import React from 'react'
import {NavLink} from 'react-router-dom'


import Image from 'react-image-webp';

export default function Sale(){
  return (

      <section className="saleSelect">
          <Image
            src={require('../../images/sale.jpeg')}
            webp={require('../../images/sale.webp')}
          />
          <div>
          <NavLink 
                to="/store" 
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