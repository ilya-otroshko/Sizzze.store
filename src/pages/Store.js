import React,{Component} from 'react';
import StoreHeader from '../components/store/StoreHeader';
import Sidebar from '../components/store/Sidebar';
import Products from '../components/store/ProductsList';



export default class Store extends Component{
  constructor(props) {
    super(props);
 
    this.state = {
      blocks: [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6}
      ]
    };
  }
  render(){

    const stok = [40, 41, 42, 43, 44]
    return (
        <div className="container store">   
          <StoreHeader />
          <div className="barAndProducts">
            <Sidebar />
            <Products 
            blocks={this.state.blocks}
            name="Ugg Neumel Black"
            price="1650"
            stok={stok}
            />
          </div>
        </div>
  
    )
  }
  }


  