import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'

export default class Products extends Component {
    constructor(props) {
    super(props);
 
    this.state = {};
  }
    componentDidMount() {
        fetch('/api/v1/products')
      .then(response => response.json())
      .then(json => this.setState({products: json}))
      .catch(error => console.log(error))
    }


     render() {
       if(this.state.products !== undefined)
    {
        return (
      <div className="productsList">
      <ul>
          {this.state.products.map(product =>(
            <NavLink
            to={`/products/${product.id}`}
            key={product.id}
            >
            <li className="productsCard">
              <div className="cardBlock">
                <div>
                      <img src={`${product.images[0].picture.big.url}`} alt="" />
                </div>
                <div className="infoSlider">
                    <h3>{product.name}</h3>
                    <p>{product.price_sell}грн</p>
                  </div>
              </div>
              </li>
            </NavLink>
          ))}
          </ul>

      </div>

    );
    }

  return (
      <div className="productsList">

      </div>

    );
  }
} 
    
    