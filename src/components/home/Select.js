import React,{Component} from 'react'

import {CSSTransition,TransitionGroup,} from 'react-transition-group';

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
    }
  
    handleChangeBrand(event) {
      console.log(1)
      this.setState({brandValue: event.target.value});
      
    }
    handleChangeModel(event) {
        console.log(2)
        this.setState({modelValue: event.target.value});
      }
  
    handleSubmit(event) {
      console.log( 'Brand: ' + this.state.brandValue + ' Model: ' +  this.state.isModelListVisible);
      event.preventDefault();
    }

    brandToggleList = () => {
         
        this.setState({
            isBrandListVisible: !this.state.isBrandListVisible
        });
    }; 

    modelToggleList = () => {
         
        this.setState({
            isModelListVisible: !this.state.isModelListVisible
        });
    }; 
    
    render() {
      return (

        <form>
            <div className="selects">
                <div className="brandSelect">
                    <p>Brands:</p>  
                    <input type="text" value={this.state.brandValue} readOnly
                    onClick= {() => this.brandToggleList(this.state.isBrandListVisible)}/>
                    
            <TransitionGroup>
                        {this.state.isBrandListVisible && (
                    <CSSTransition 
                            classNames="showBrandsName"
                            timeout={{
                                enter: 500,
                                exit: 450
                            }}>
                                <div className="wrapperBrandsName">
                    <div className="brandsName">
                        <input type="text" value="all" readOnly
                        onClick={this.handleChangeBrand}/>
                        <input type="text" value="adidas" readOnly  
                        onClick={this.handleChangeBrand}/>
                        <input type="text" value="nike" readOnly 
                        onClick={this.handleChangeBrand}/>
                        <input type="text" value="puma" readOnly
                        onClick={this.handleChangeBrand} />
                        <input type="text" value="reebok" readOnly
                        onClick={this.handleChangeBrand} />
                        <input type="text" value="new-balance" readOnly
                        onClick={this.handleChangeBrand} />
                    </div>
                    </div>
                    </CSSTransition>
                        )}
            </TransitionGroup>
                </div>


                <div className="modelSelect">
                <p>Models:</p>  
                <input type="text" value={this.state.modelValue} readOnly
                onClick= {() => this.modelToggleList(this.state.isModelListVisible)}/>
                
         <TransitionGroup>
                    {this.state.isModelListVisible && (
                         <CSSTransition 
                         
                         classNames="showBrandsName"
                         timeout={{
                             enter: 500,
                             exit: 450
                         }}>
                             <div className="wrapperBrandsName">
                <div className="brandsName">
                    <input type="text" value="all" readOnly
                    onClick={this.handleChangeModel}/>
                    <input type="text" value="adidas" readOnly  
                    onClick={this.handleChangeModel}/>
                    <input type="text" value="nike" readOnly 
                    onClick={this.handleChangeModel}/>
                    <input type="text" value="puma" readOnly
                    onClick={this.handleChangeModel} />
                    <input type="text" value="reebok" readOnly
                    onClick={this.handleChangeModel} />
                    <input type="text" value="new-balance" readOnly
                    onClick={this.handleChangeModel} />
                </div>
                </div>
                </CSSTransition>
                    )}
        </TransitionGroup>

                </div>
               
         </div>

             <button type="button" onClick={this.handleSubmit}>find</button>
         
        </form>
      );
    }
  }