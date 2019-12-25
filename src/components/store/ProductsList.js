import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Products(props){
    
  return (

      <div className="productsList">
      <ul>
          {props.blocks.map(block =>(
            <NavLink
            to={`/products/${block.id}`}
            key={block.id}
            >
            <li className="productsCard">
              <div className="cardBlock">
                <div>
                      <img src={require(`../../images/${block.id}.jpeg`)} alt=""/>
                </div>
                <div className="infoSlider">
                    <h3>{props.name}</h3>
                    <p>{props.price}uah</p>
                  </div>
              </div>
              </li>
            </NavLink>
          ))}
          </ul>

      </div>

  )
} 
    
    