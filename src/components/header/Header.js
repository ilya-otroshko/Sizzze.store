import React,{Component} from 'react'

import HeaderPC from './HeaderPC';
import HeaderMob from './HeaderMob';

export default class Header extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
    
    };
  }
 
  render() {

    return (
      <div>
      <HeaderMob />
      <HeaderPC />
      </div>

    )
  }
}

