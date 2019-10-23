import React,{Component} from 'react'

import {NavLink} from 'react-router-dom'
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
          
            <NavLink 
                to="/">
                  <h1>sizzze | store</h1>
                </NavLink>
        </div>
        <Navbar />
        </div>
        
    )
  }
}

