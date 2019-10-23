import React,{Component} from 'react'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

export default class PriceRange extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      value: { min: 230, max: 1000 }
    }
  }
 
  render() {

    return (

        <div className="priceRange">
            <p>Price filter</p>
          <InputRange
            step={10}
            maxValue={1000}
            minValue={230}  
            onChange={value => this.setState({ value: value })}
            value={this.state.value} />
          <p>Price: {this.state.value.min}uah -- {this.state.value.max}uah</p>
        </div>
      
    );
  }
}