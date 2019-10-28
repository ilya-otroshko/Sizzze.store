import React,{Component} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default class BasketItems extends Component{
  constructor(props) {
    super(props);
 
    this.state = {
        basketCount: 0,
        num: 1
    };
  }
  onOpenModal = () => {
    this.setState({ open: true });
  }; 

  onCloseModal = () => {
    this.setState({ open: false });
  };

  minus = e => {
    let num = e.target.nextSibling.value;
    if(num > 1)
    this.setState({num: num - 1})
  };

  plus = e => {
    let num = e.target.previousSibling.value;
    if(num < 5)
    this.setState({num: (+num) + 1})
  };
  render(){

    return (
        <div className="itemsInBasket">
            <div className="imageInBasket">
            <img src={require(`../../images/1.jpeg`)}  alt=""/>
            </div>

            <div className="infoInBasket">
                    <h5>{this.props.title}</h5>
                    <p>Размер: {this.props.size}</p>
                    <div>Количество:
                      <div>
                      <button 
                      className="quantity"
                      onClick={this.minus}>
                        -
                      </button>
                        <input 
                            type="number"
                            readOnly
                            value={this.state.num}/>
                      <button 
                      className="quantity"
                      onClick={this.plus}>
                        +
                      </button>
                      </div>
                      
                      </div> 
    
            </div>
            <div className="priceBasket">
                Цена:
                <p> {this.props.price}грн</p>
            </div>
            <div 
            className="deleteItemBasket"
            onClick={() => { this.props.delete(this.state.basketCount)}}>
                <FontAwesomeIcon
                icon={faTimes}/>
            </div>
        </div>         
      )
    }
}

