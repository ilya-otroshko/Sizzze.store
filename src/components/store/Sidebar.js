import React,{Component} from 'react'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      value: { min: 230, max: 1000 },
    };
  }
 
  render() {

    return (
      <div className="sidebar">

        <div className="priceRange">
          <InputRange
            step={10}
            maxValue={1000}
            minValue={230}
            value={this.state.value}
            onChange={value => this.setState({ value })} />
          <p>Price: {this.state.value.min}uah -- {this.state.value.max}uah</p>
        </div>
     

      </div>
      
    );
  }
}
