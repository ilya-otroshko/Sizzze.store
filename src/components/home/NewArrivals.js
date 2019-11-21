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
                 <p>новые модели!</p>
                 </NavLink>
                 <NavLink 
                to="/store">
                 <button>покажи</button>   
                </NavLink>
             </div>
            <img src={left} alt=""/>
         </div>
         
         <div className="rightArrivals">
         <div>
                 <NavLink 
                to="/store">
                 <p>пополнили наличие!</p>
                 </NavLink>
                 <NavLink 
                to="/store">
                    <button>покажи</button> 
                </NavLink>
             </div>
            <img src={right} alt=""/>
         </div>

      </section>

  )
}