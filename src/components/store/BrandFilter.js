import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'



export default class BrandFilter extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
    };
  }
 
  render() {
    const brands = new Array(5)
    .fill('')
    .map( (_, i) => ( {id:i, 
        value:["adidas", "nike", "puma", "reebok", "new-balance"]} ) ) 
    return (
        <div className="brandFilter">
          <p>Brand</p>
            <ul>
            {brands.map(brand =>(
                <li key={brand.id}>
                <NavLink
                to={`/${brand.value[brand.id]}`}>
                
                {brand.value[brand.id]}

            </NavLink>
                </li>
            ))}
            </ul>
        
        </div>
    );
  }
}