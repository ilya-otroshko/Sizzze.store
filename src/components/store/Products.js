import React,{Fragment} from 'react'


export const Products = ({blocks}) => {
    
  return (
    <Fragment>
      <div className="productsList">
      <ul>
          {blocks.map(block =>(
          <li 
          className="productsCart"
          key={block.id}>
            <div>
          <img src={require(`../../images/${block.src}.png`)} alt=""/>
            </div>
            <div className="infoSlider">
                <h3>Ugg Neumel Black</h3>
                <p>1650uah</p>
                <span>In stok: 40, 41, 42, 43</span>
              </div></li>
          ))}
          </ul>

      </div>
      
      </Fragment>
  )
} 
    
    