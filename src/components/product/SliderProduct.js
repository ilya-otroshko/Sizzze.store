import React from 'react';

export default function SliderProduct(props){
    
    return (

        props.blocks.map(block =>(

            <div key={props.count}>
                <div className="blockInSlider">
                    <img src={require(`../../images/${props.count}.jpeg`)} alt="" />
                    
            {props.name && (
                <div className="infoSlider">
                    <h3>{props.name}</h3>
                    <p>{props.price}uah</p>
                    <span>In stok: {props.stok.join(', ')}</span>
                </div>
            )}
                </div>
            </div>
        ))
    )
  } 
      