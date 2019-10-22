import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

class Brands extends Component  {

      render(){

  return (

        <ul className="brandsNav">
        <li>
        <NavLink to="/adidas" >
        Adidas
        </NavLink>
      </li>
      <li>
        <NavLink to="/nike" >
        Nike
        </NavLink>
      </li>
      <li>
        <NavLink to="/reebok" >
        Reebok
        </NavLink>
      </li>
      <li>
        <NavLink to="/new-balance" >
        New Balance
        </NavLink>
      </li>
      <li>
        <NavLink to="/puma" >
        Puma
        </NavLink>
      </li>
        </ul>

        )
    }
}

export default Brands;