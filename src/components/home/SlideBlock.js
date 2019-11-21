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
                    <img src={require(`../../images/${props.count}.jpeg`)} alt="" />
                    
            {props.name && (
                <div className="infoSlider">
                    <h3>{props.name}</h3>
                    <p>{props.price}грн</p>
                </div>
            )}
                

                </div>
            </div>
            </NavLink>
        ))
    )
  } 
      
      