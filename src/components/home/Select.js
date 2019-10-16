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
      this.setState({brandValue: event.target.value});
      
    }
    handleChangeModel(event) {
        this.setState({modelValue: event.target.value});
      }
  
    handleSubmit(event) {
      console.log( 'Brand: ' + this.state.brandValue + ' Model: ' +  this.state.modelValue);
      event.preventDefault();
    }

    brandToggleList = () => {
         
        this.setState({
            isBrandListVisible: !this.state.isBrandListVisible
        });
        this.state.isBrandListVisible ? this.setState({
            transformIconBrand : 'none', colorBrand: ' '
        }) : this.setState({
           transformIconBrand : 'rotate(180deg)', colorBrand: 'white' })
    }; 

    clickOutModel = () => {
        this.state.isModelListVisible && ( this.setState({
            isModelListVisible :false,
            transformIconModel : 'none', 
            colorModel: ' '
        }) ) 
    }

    clickOutBrand = () => {
        this.state.isBrandListVisible && ( this.setState({
            isBrandListVisible :false,
            transformIconBrand : 'none', 
            colorBrand: ' '
        }) ) 
    }
    modelToggleList = () => {
         
        this.setState({
            isModelListVisible: !this.state.isModelListVisible
        });
        this.state.isModelListVisible ? this.setState({
            transformIconModel : 'none', colorModel: ' '
        }) : this.setState({
           transformIconModel : 'rotate(180deg)', colorModel: 'white' })
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
            <OutsideClickHandler
                        onOutsideClick={() => {
                            this.clickOutBrand()
                        }}
                        >
                <div className="brandSelect">
                    <p>{this.props.title1}</p>  
                    <input 
                    type="text" 
                    value={this.state.brandValue} 
                    readOnly
                    onClick= {() => this.brandToggleList(this.state.isBrandListVisible)}
                    className="mainInput"
                    style={{color: this.state.colorBrand}}
                    
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
                             style={{
                                 border: "1px solid white",
                                 borderBottomLeftRadius: "5px",
                                 borderBottomRightRadius: "5px",
                                 marginTop: "-5px",
                                 height: '170%', 
                                 position: 'absolute', 
                                 width: '90%'
                                 }}> 
                                <div className="wrapperBrandsName"
                                ref={this.myRef}
                                style={scroll}>
                    <div className="brandsName">
                        {this.props.brandName.map(input =>
                            <input 
                            type="text" 
                            value={input.value[input.id]} 
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
                </div>
                </OutsideClickHandler>
                            
                <OutsideClickHandler
                        onOutsideClick={() => {
                            this.clickOutModel()
                        }}
                        >
                <div className="modelSelect">
                <p>{this.props.title2}</p>  
                <input 
                type="text" 
                value={this.state.modelValue} 
                readOnly
                onClick= {() => this.modelToggleList(this.state.isModelListVisible)}
                className="mainInput"
                style={{color: this.state.colorModel}}/>
                <div className="iconInput">
                        <FontAwesomeIcon 
                        icon={faCaretDown} 
                        className="brandsIcon"
                        style={{transform:this.state.transformIconModel, color: this.state.colorModel}}
                        />
                    </div>
                   
         <TransitionGroup>
                    {this.state.isModelListVisible && (
                         <CSSTransition 
                         classNames="showBrandsName"
                         timeout={150}>
                             <Scrollbars 
                             style={{
                                 border: "1px solid white",
                                 borderBottomLeftRadius: "5px",
                                 borderBottomRightRadius: "5px",
                                 marginTop: "-5px",
                                 height: '170%', 
                                 position: 'absolute', 
                                 width: '90%'
                                 }}> 
                             <div className="wrapperBrandsName"
                              ref={this.myRef}
                              style={scroll}>

                <div className="brandsName">
                {this.props.modelName.map(input =>
                            <input 
                            type="text" 
                            value={input.value[input.id]} 
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
        
                </div>
                </OutsideClickHandler>
         </div>

             <button type="button"  onClick={this.handleSubmit}>find</button>
         
        </form>
      );
    }
  }
