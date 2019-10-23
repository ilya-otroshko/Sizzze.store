import React,{Component} from 'react'
import PriceRange from './PriceRange';
import SizeFilter from './SizeFilter';
import ColorFilter from './ColorFilter';
import Gender from './Gender';
import BrandFilter from './BrandFilter';

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
    
    };
  }
 
  render() {

    return (
      <div className="sidebar">
        <button>
          Show filter
        </button>
        <PriceRange />
        <SizeFilter />
        <BrandFilter />
        <ColorFilter />
        <Gender />
      </div>
      
    );
  }
}
