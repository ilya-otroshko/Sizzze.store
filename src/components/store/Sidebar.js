import React,{Component} from 'react'
import PriceRange from './PriceRange';
import SizeFilter from './SizeFilter';

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
    
    };
  }
 
  render() {

    return (
      <div className="sidebar">
        <PriceRange />
        <SizeFilter />
      </div>
      
    );
  }
}
