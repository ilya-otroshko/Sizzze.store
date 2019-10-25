import React,{Component} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default class BasketItems extends Component{
  constructor(props) {
    super(props);
 
    this.state = {
        basketCount: 0
    };
  }
  onOpenModal = () => {
    this.setState({ open: true });
  }; 

  onCloseModal = () => {
    this.setState({ open: false });
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
                    <p>Количество: 
                        <input 
                            type="number"
                            min="1" 
                            max="3" 
                            step="1"/>
                    </p>
                    
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

