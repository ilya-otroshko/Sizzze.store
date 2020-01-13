import React from 'react';

export default function SliderProduct(props){
    return (

        props.blocks.map(block =>(

            <div key={props.count}>
                <div className="blockInSlider">
                    <img src={`${props.images.url}`} alt="" />
                </div>
            </div>
        ))
    )
  } 
      