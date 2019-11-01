import React,{Component} from 'react'

import {CSSTransition,TransitionGroup,} from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import OutsideClickHandler from 'react-outside-click-handler';
import { connect } from 'react-redux';

class SelectOrder extends Component {
    constructor(props) {
      super(props);
      this.state = {
            isInputListVisible: false,
            inputValue: this.props.inputValue};
      this.handleChangeInput = this.handleChangeInput.bind(this);
    }

    handleChangeInput(event) {
      this.setState({
            inputValue: event.target.value,
            })
      this.props.changeForm(this.props.method, event.target.value);
      this.clickOutInput();
    }
    inputToggleList = () => {
        this.setState({
            isInputListVisible: !this.state.isInputListVisible
        });
        this.state.isInputListVisible ? 
        this.setState({
            transformIconInput : 'none'}) 
            : 
        this.setState({
            transformIconInput : 'rotate(180deg)'})
    }; 
    clickOutInput = () => {
        this.state.isInputListVisible && ( this.setState({
            isInputListVisible :false,
            transformIconInput : 'none'
        }) ) 
    }
     render() {
      return (
            <div className="selectOrder">
            
                <div className="brandSelect">
                    <p>{this.props.title1}</p>  
                    <OutsideClickHandler
                        onOutsideClick={() => {
                            this.clickOutInput()
                        }}
                        >
                    <div className="mainBlock">
                        <input 
                        className="mainInput"
                        type="text" 
                        value={this.state.inputValue} 
                        readOnly
                        onClick= {() => this.inputToggleList(this.state.isInputListVisible)}
                        />
                        <div className="iconInput">
                            <FontAwesomeIcon 
                            icon={faCaretDown} 
                            className="brandsIcon"
                            style={{transform:this.state.transformIconInput}}
                            />
                        </div>
                    </div>
                    
            <TransitionGroup>
                        {this.state.isInputListVisible && (
                    <CSSTransition 
                            classNames="showBrandsName"
                            timeout={150}>
                                <div className="wrapperBrandsName">
                    <div className="brandsName">
                        {this.props.method.map(input =>
                            <input 
                            type="text" 
                            value={input.name} 
                            readOnly
                            onClick={this.handleChangeInput}
                            key={input.id}
                            />
                            )}
                    </div>
                    </div>
                    </CSSTransition>
                        )}
            </TransitionGroup>
            </OutsideClickHandler>
                </div>
         </div>
      );
    }
  }

  export default connect(
    state => ({
    }),
    dispatch => ({
        changeForm: (method, inputValue) => {
            dispatch({ type: method[0].id, value: inputValue})
        }
    })
  )(SelectOrder);