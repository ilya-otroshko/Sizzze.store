import React from 'react'
import {NavLink} from 'react-router-dom'

import left from '../../images/left.jpeg'
import right from '../../images/right.jpeg'

export default function NewArrivals(){
  return (

      <section className="newArrivals">

         <div className="leftArrivals">
             <div>
             <NavLink 
                to="/store">
                 <p>We have new models!</p>
                 </NavLink>
                 <NavLink 
                to="/store">
                 <button>Show me</button>   
                </NavLink>
             </div>
            <img src={left} alt=""/>
         </div>
         
         <div className="rightArrivals">
         <div>
                 <NavLink 
                to="/store">
                 <p>Replenish Availability!</p>
                 </NavLink>
                 <NavLink 
                to="/store">
                    <button>Show me</button> 
                </NavLink>
             </div>
            <img src={right} alt=""/>
         </div>

      </section>

  )
}