import React,{Component} from 'react'
import Select from '../home/Select';


export default class SizeFilter extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      size: [
        {id: 'all', name: 'все'},
        {id: '36', name: '36'},
        {id: '37', name: '37'},
        {id: '38', name: '38'},
        {id: '39', name: '39'},
        {id: '40', name: '40'},
        {id: '41', name: '41'},
        {id: '42', name: '42'},
        {id: '43', name: '43'},
        {id: '44', name: '44'},
        {id: '45', name: '45'},
      ]
    };
  }
 
  render() {
    return (
        <div className="sizeFilter">
          <p>размер</p>
            <Select 
            brandName={this.state.size}
            brandValue={'все'}
            />

        </div>
    );
  }
}