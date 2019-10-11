import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import {CSSTransition,TransitionGroup,} from 'react-transition-group';

import Brands  from '../../content/Brands'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'



class Navbar extends Component {

    state = {
      isListVisible: false
    };

    toggleList = () => {
         
        this.setState({
            isListVisible: !this.state.isListVisible
        });

    }; 

render(){
    const { isListVisible } = this.state;
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
        
            <li onMouseEnter= {() => this.toggleList(isListVisible)}
                onMouseLeave={() => this.toggleList(!isListVisible)}>
                <NavLink 
                to="/store" 
                className="pagelink">
                Brands
                <FontAwesomeIcon 
                icon={faChevronDown} 
                className="brandsIcon"
                />
                </NavLink>
                <TransitionGroup>
                    {isListVisible && (
                        <CSSTransition 
                        classNames="showBrandsNav"
                        timeout={450}>
                        <Brands />
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </li>
        </ul>
    </nav>
        )
    }
}


export default Navbar;