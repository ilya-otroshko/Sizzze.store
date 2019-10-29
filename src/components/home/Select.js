import React,{Component} from 'react'

import {CSSTransition,TransitionGroup,} from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import OutsideClickHandler from 'react-outside-click-handler';
import { Scrollbars } from 'react-custom-scrollbars';

export default class Select extends Component {
    constructor(props) {
      super(props);
      this.state = {
            isBrandListVisible: false,
            isModelListVisible: false,
            brandValue: 'all',
            modelValue: 'all'};
      this.handleChangeBrand = this.handleChangeBrand.bind(this);
      this.handleChangeModel = this.handleChangeModel.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.myRef = React.createRef();
    }
  
    handleChangeBrand(event) {
      this.setState({brandValue: event.target.value})
      this.clickOutBrand();
    }
    handleChangeModel(event) {
        this.setState({modelValue: event.target.value})
        this.clickOutModel();
      }
  
    handleSubmit(event) {
      console.log( 'Brand: ' + this.state.brandValue + ' Model: ' +  this.state.modelValue);
      event.preventDefault();
    }

    brandToggleList = () => {
         
        this.setState({
            isBrandListVisible: !this.state.isBrandListVisible
        });
        this.state.isBrandListVisible ? 
        this.setState({
            transformIconBrand : 'none', 
            colorBrand: ' ',
            bg: '' }) 
            : 
        this.setState({
           transformIconBrand : 'rotate(180deg)', 
           colorBrand: 'white', 
           bg: this.props.bg})
    }; 

    clickOutModel = () => {
        this.state.isModelListVisible && ( this.setState({
            isModelListVisible :false,
            transformIconModel : 'none', 
            colorModel: ' ',
            bg2: ' '
        }) ) 
    }

    clickOutBrand = () => {
        this.state.isBrandListVisible && ( this.setState({
            isBrandListVisible :false,
            transformIconBrand : 'none', 
            colorBrand: ' ',
            bg: ' '
        }) ) 
    }
    modelToggleList = () => {
         
        this.setState({
            isModelListVisible: !this.state.isModelListVisible
        });
        this.state.isModelListVisible ? this.setState({
            transformIconModel : 'none', 
            colorModel: ' ',
            bg2: ''
        }) : this.setState({
           transformIconModel : 'rotate(180deg)', 
           colorModel: 'white',
           bg2: this.props.bg })
    }; 
     render() {
        
        let scroll = {width: '100%'}
        const wrapper = this.myRef.current;
        if (wrapper != null) {
            let client = wrapper.clientWidth
            let scrollWidth = wrapper.offsetWidth - client;
            // eslint-disable-next-line
            let scroll = {width: client - scrollWidth}
        }
      return (
        
        <form>
            <div className="selects">
            
                <div className="brandSelect">
                    <p>{this.props.title1}</p>  
                    <OutsideClickHandler
                        onOutsideClick={() => {
                            this.clickOutBrand()
                        }}
                        >
                    <input 
                    className="mainInput"
                    type="text" 
                    value={this.state.brandValue} 
                    readOnly
                    onClick= {() => this.brandToggleList(this.state.isBrandListVisible)}
                    style={{color: this.state.colorBrand, background: this.state.bg}}
                    />

                    <div className="iconInput">
                        <FontAwesomeIcon 
                        icon={faCaretDown} 
                        className="brandsIcon"
                        style={{transform:this.state.transformIconBrand,color: this.state.colorBrand}}
                        />
                    </div>

            <TransitionGroup>
                        {this.state.isBrandListVisible && (
                    <CSSTransition 
                            classNames="showBrandsName"
                            timeout={150}>
                                <Scrollbars
                                className="scrollbarsClass"> 
                                <div className="wrapperBrandsName"
                                ref={this.myRef}
                                style={scroll}>
                    <div className="brandsName">
                        {this.props.brandName.map(input =>
                            <input 
                            type="text" 
                            value={input.name} 
                            readOnly
                            onClick={this.handleChangeBrand}
                            key={input.id}
                            />
                            )}
                    </div>
                    </div>
                    </Scrollbars> 
                    </CSSTransition>
                        )}
            </TransitionGroup>
            </OutsideClickHandler>
                </div>
                
                
                <div className="modelSelect">
                <p>{this.props.title2}</p>  
                            
                <OutsideClickHandler
                        onOutsideClick={() => {
                            this.clickOutModel()
                        }}
                        >
                <input 
                type="text" 
                value={this.state.modelValue} 
                readOnly
                onClick= {() => this.modelToggleList(this.state.isModelListVisible)}
                className="mainInput"
                style={{color: this.state.colorModel,
                    background: this.state.bg2}}/>
                <div className="iconInput">
                        <FontAwesomeIcon 
                        icon={faCaretDown} 
                        className="brandsIcon"
                        style={{transform:this.state.transformIconModel, 
                        color: this.state.colorModel}}
                        />
                    </div>
                   
         <TransitionGroup>
                    {this.state.isModelListVisible && (
                         <CSSTransition 
                         classNames="showBrandsName"
                         timeout={150}>
                             <Scrollbars 
                            className="scrollbarsClass"> 
                             <div className="wrapperBrandsName"
                              ref={this.myRef}
                              style={scroll}>

                <div className="brandsName">
                {this.props.modelName.map(input =>
                            <input 
                            type="text" 
                            value={input.name} 
                            readOnly
                            onClick={this.handleChangeModel}
                            key={input.id}
                            />
                            )}
                </div>
                </div>
                </Scrollbars> 
                </CSSTransition>
                    )}
        </TransitionGroup>
        </OutsideClickHandler>
                </div>
         </div>
                    <div>
                    <button type="button"  onClick={this.handleSubmit}>find</button>

                    </div>
         
        </form>
      );
    }
  }
