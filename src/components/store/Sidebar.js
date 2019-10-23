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
      isListVisible: false
    };
  }
  toggleFilter = () => {
    this.setState({
        isFilterVisible: !this.state.isFilterVisible
    });
  };
  render() {

    return (
      <div className="sidebar">
         {!this.state.isFilterVisible && (
        <div className="showFilter">
          <button
          onClick= {() => this.toggleFilter(this.state.isFilterVisible)}>
            Show filter
          </button>
        </div>
         )}
        {this.state.isFilterVisible && (

          <div>
            <div className="showFilter">
                <button
                  onClick= {() => this.toggleFilter(this.state.isFilterVisible)}>
                    Hide filter
                </button>
            </div>
          <PriceRange />
          <SizeFilter />
          <BrandFilter />
          <ColorFilter />
          <Gender />
          </div>
          )}
          <div className="filter">
          <PriceRange />
          <SizeFilter />
          <BrandFilter />
          <ColorFilter />
          <Gender />
          </div>
          
      </div>
      
    );
  }
}
