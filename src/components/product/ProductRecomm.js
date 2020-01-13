import React,{Component} from 'react'
import ProductList from '../store/ProductsList'
export default class ProductRecomm extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      blocks: [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4}
      ]
    };
  }
 
  render() {
    return (
        <div className="productRecomm">
          <p>Related Products</p>
          <ProductList>
          </ProductList>
        </div>
    );
  }
}