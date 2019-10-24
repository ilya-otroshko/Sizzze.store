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
    const stok = [40, 41, 42, 43, 44]
    return (
        <div className="productRecomm">
          <p>Related Products</p>
          <ProductList
           blocks={this.state.blocks}
           name="Ugg Neumel Black"
           price="1650"
           stok={stok}
          >
          </ProductList>
        </div>
    );
  }
}