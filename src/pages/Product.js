import React,{Component} from 'react'

import ProductSlider from '../components/product/ProductSlider'
import ProductInfo from '../components/product/ProductInfo'
import ProductRecomm from '../components/product/ProductRecomm'

export default class Product extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      id:window.location.href.split('products/')[1],
        buy: false,
        sizes: [
          {id: 36, name: 36, count: 0, stock: ''},
          {id: 37, name: 37, count: 2, stock: 'inStock'},
          {id: 38, name: 38, count: 0, stock: ''},
          {id: 39, name: 39, count: 2, stock: 'inStock'},
          {id: 40, name: 40, count: 0, stock: ''},
          {id: 41, name: 41, count: 0, stock: ''},
          {id: 42, name: 42, count: 2, stock: 'inStock'},
          {id: 43, name: 43, count: 0, stock: ''},
          {id: 44, name: 44, count: 1, stock: 'inStock'},
          {id: 45, name: 45, count: 0, stock: ''},
        ],
    };
  }
   componentDidMount() {
        fetch(`/api/v1/products/${this.state.id}`)
      .then(response => response.json())
      .then(json => this.setState({product: json}))
      .catch(error => console.log(error))
    }
        check(){
        document.location.pathname = `/products/${window.location.href.split('products/')[1]}`;
    }

  render() {
    if(this.state.id !== window.location.href.split('products/')[1]){
      this.check()
    }
    if(this.state.product !== undefined)
    {
      return (
          <div className="container productWrapper">   
            <div className="product">
                <ProductSlider 
                  images={this.state.product.images}/>
                <ProductInfo
                  sizes={this.state.sizes} 
                  product={this.state.product}/>
            </div>  
              <ProductRecomm/>
          </div>
      )
    }
    return (
        <div className="container productWrapper">   
          </div>
    )
  }
}
