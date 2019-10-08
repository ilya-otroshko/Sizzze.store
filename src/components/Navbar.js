import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

import Brands  from '../content/Brands'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listOpacity: '0',
            listDisplay: 'none'
        };
      }


  handleEnter(e) {
      console.log('ok')
    this.setState({ 
        listOpacity: '1',
        listDisplay: 'block' });
  }
  handleLeave(e) {
    console.log('ok')
  this.setState({ 
        listOpacity: '0',
        listDisplay: 'none' });
        setTimeout(() => {
            
        }, 1000);
}

render(){

    const style = { 
        opacity: this.state.listOpacity, 
        display: this.state.listDisplay };

    return(
        <nav>
        <ul className="pageNav">
        <li>
            <NavLink 
                to="/" 
                className="pagelink">
            Main
            </NavLink>
        </li>
        <li>
            <NavLink 
                to="/store" 
                className="pagelink">
            Store
            </NavLink>
        </li>
        <li onMouseEnter={ e => this.handleEnter() } 
            onMouseLeave={ e => this.handleLeave() }
            style={{paddingBottom: '15px'}}>
            <NavLink 
            to="/store" 
            className="pagelink">
            Brands
            <FontAwesomeIcon icon={faChevronDown} className="brandsIcon"/>
            </NavLink>
            <Brands style={style} />
        </li>
        </ul>
    </nav>
        )
    }
}


export default Navbar;