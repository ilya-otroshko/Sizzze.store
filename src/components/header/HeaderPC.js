import React,{Component} from 'react'

import Navbar from './Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

export default class HeaderPC extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
    
    };
  }
 
  render() {

    return (
<div className="headerPC">
        <div className="insta">
        <div onClick={() => { 
                window.location.href = 'https://www.instagram.com/sizzze.store';return null;
              }}>
            <FontAwesomeIcon
            icon={faInstagram}
            />
            </div>      
          <h1>sizzze | store</h1>
        </div>
        <Navbar />
        </div>
        
    )
  }
}

