import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'



export default class BrandFilter extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      brands: ["adidas", "nike", "puma", "reebok", "new-balance"]
    };
  }
 
  render() {
    return (
        <div className="brandFilter">
          <p>Brand</p>
            <ul>
            {this.state.brands.map((brand, index) =>(
              <li key={'brand-' + index}>
              <NavLink to={`/${brand}`}> {brand} </NavLink>
              </li>
            ))}
            </ul>
        
        </div>
    );
  }
}