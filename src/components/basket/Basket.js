import React,{Component} from 'react';

import Modal from 'react-responsive-modal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import BasketItems from './BasketItems';

export default class Basket extends Component{
  constructor(props) {
    super(props);
 
    this.state = {
        open: false,
        basketCount: 1,
        title: 'Ugg Neumel Black',
        price: 1650,
        size: 40,
        name: 'no'
    };
  }
  onOpenModal = () => {
    this.setState({ open: true });
  }; 

  onCloseModal = () => {
    this.setState({ open: false });
  };

  store = () => {
        document.location.pathname = '/store';
    }

  order = () => {
        document.location.pathname = '/order';
    }
    
    delete = (item) => {
        this.setState({ basketCount: item })
    }
  render(){
    const { open } = this.state;
    return (
        <div className="basketInHeader">
            <button onClick={this.onOpenModal}>
                    <span>{this.state.basketCount}</span>
                        <FontAwesomeIcon
                        icon={faShoppingBasket} 
                        />
                </button>
        <Modal 
        open={open} 
        onClose={this.onCloseModal} 
        center
        >
            <div>
            <h3>Корзина заказов</h3>
                <div className="basket">
                    {this.state.basketCount === 0 ?(
                        <div className="emptyBasket">
                            <img src={require(`../../images/basket.jpg`)} alt=""/>
                            <div>
                                <button onClick={this.store}>
                                    Выбрать!
                                </button>
                            </div>
                        </div>
                    )
                    :
                    (
                    <div className="fullBasket">
                       <BasketItems
                       title={this.state.title}
                       size={this.state.size}
                       price={this.state.price}
                       delete={this.delete}/>
                       
                        <div className="orderBasket">
                            <div>Сумма: <p>{this.state.price}грн</p></div>
                            
                            <div>
                                <button
                                    className="continueShopping"
                                    onClick={this.onCloseModal}>Продолжить покупки</button>
                                <button 
                                    className="checkout"
                                    onClick={this.order}>Оформить заказ
                                </button>
                            </div>
                            
                        </div>
                    </div>
                        )}
                </div>
            </div>

        </Modal>
      </div>
       
      )
    }
}

