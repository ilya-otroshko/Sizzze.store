import React,{Component} from 'react'

import OutsideClickHandler from 'react-outside-click-handler';
import { scaleDown as Menu } from 'react-burger-menu'
import {NavLink} from 'react-router-dom'
import {CSSTransition,TransitionGroup,} from 'react-transition-group';

import Brands  from '../../content/Brands'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default class HeaderMob extends Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false,
      isListVisible: false
    }
  }
  toggleList = () => {
      this.setState({
          isListVisible: !this.state.isListVisible
      });

  }; 
 
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen});
  }

  closeMenu () {
    this.setState({menuOpen: false})
  }

  showSettings (event) {
    event.preventDefault();
  
  }

  scroll(){
    window.scrollTo(0,0)
    document.getElementsByTagName('html')[0].classList.add('no-scroll')
  }
  render() {
    this.state.menuOpen ?
    (
      this.scroll()
    )
    :
    (
      document.getElementsByTagName('html')[0].classList.remove('no-scroll')
    )
    const { isListVisible } = this.state;
    return (

      <div className="headerMob">
              <FontAwesomeIcon
              className="instaIcon"
            icon={faInstagram}
            onClick={() => { 
              window.location.href = 'https://www.instagram.com/sizzze.store';return null;
            }}/>
              <div className="insta">
            
          <h1>sizzze | store</h1>
        </div>
      <Menu
      pageWrapId = { "page-wrap" }
      outerContainerId={ "outer-container" }
      right
      onStateChange={(state) => this.handleStateChange(state)}
      isOpen={this.state.menuOpen}>
              <OutsideClickHandler
        onOutsideClick={() => {
          this.closeMenu()
        }}
        >
          <ul className="pageNav">
        <li>
            <NavLink 
                to="/" 
                className="pagelink"
                onClick= {() => this.closeMenu()}>
            Main
            </NavLink>
        </li>
        <li className="secondLi">
            <NavLink 
                to="/store" 
                className="pagelink"
                onClick= {() => this.closeMenu()}>
            Store
            </NavLink>
        </li>
        <OutsideClickHandler
        onOutsideClick={() => {
          this.setState({isListVisible: false})
          
        }}
        >
            <li onClick= {() => this.toggleList(isListVisible) }>

                Brands
                <FontAwesomeIcon 
                icon={faChevronDown} 
                className="brandsIcon"
                />
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
            </OutsideClickHandler>
        </ul>
        </OutsideClickHandler>
    </Menu> 
    </div>
    )
  } 
}

