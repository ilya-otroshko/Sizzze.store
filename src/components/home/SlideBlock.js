import React from 'react';
import {NavLink} from 'react-router-dom'

export default function SlideBlock(props){
    
    return (

        props.blocks.map(block =>(
            <NavLink
            to={`/products/${props.count}`}
            key={props.count}
            >
            <div>
                <div className="blockInSlider">
                    <img src={require(`../../images/${props.count}.png`)} alt=""/>

                <div className="infoSlider">
                    <h3>{props.name}</h3>
                    <p>{props.price}uah</p>
                    <span>In stok: {props.stok.join(', ')}</span>
                </div>

                </div>
            </div>
            </NavLink>
        ))
    )
  } 
      
      