import React from 'react';


export const SlideBlock = ({blocks}) => {
    
    return (
        <div>
            {blocks.map(block =>(


            <div className="blockInSlider"
            key={block.id}>
            <img src={require(`../../images/${block.src}.png`)} alt=""/>
              </div>
            ))}
        </div>
    )
} 