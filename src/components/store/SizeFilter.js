import React,{Component} from 'react'
import Select from '../home/Select';


export default class SizeFilter extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
    };
  }
 
  render() {
    const size = new Array(12)
    .fill('')
    .map( (_, i) => ( {id:i, 
        value:["all", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45"]} ) )
    return (
        <div className="sizeFilter">

            <Select 
            brandName={size}
            title1={'Size'}
            colorIcon={'black'}
            bg1={'black'}
            bg2={'#e9cbff'}/>

        </div>
    );
  }
}