import React,{Component} from 'react';

import OrderGreenForm from './OrderGreenForm';


export default class Order extends Component{
  constructor(props) {
    super(props);
 
    this.state = {
        open: true,
        basketCount: 1,
        title: 'Ugg Neumel Black',
        price: 1650,
        size: 40,
        name: 'no',
        orderForm: 'green',
        greenBg: ' ',
        greenCol: ' ',
        residentBg: ' ',
        residentCol: ' '
    };
  }
  
  green = () => {
      this.setState({ 
          orderForm: 'green',
          greenBg: '#47b774', 
          greenCol: 'white',
          residentBg: ' ', 
          residentCol: ' ' })
  }

  resident = () => {
     this.setState({ 
         orderForm: 'resident',
         residentBg: '#b692d0', 
         residentCol: 'white',
         greenBg: 'white', 
         greenCol: '#47b774'
         })
    }
  render(){
    return (
        <div className="order">
            <h3>Оформление заказа</h3>

            <div className="container-fluid">
                <div className="orderForm">  

                {/* <div className="residentOrGreen">
                    <button 
                            onClick={this.green}
                            style={{
                                background: this.state.greenBg, 
                                color: this.state.greenCol }}
                            className="newGreen">
                            я новый покупатель
                        </button>

                        <button 
                            onClick={this.resident}
                            className="resident"
                            style={{
                                background: this.state.residentBg, 
                                color: this.state.residentCol }}>
                                я постоянный клиент
                        </button>
                </div>       */}
                    
                    <OrderGreenForm 
                        sum={1650}/>
                    {/* {this.state.orderForm === 'green' &&(
                        <OrderGreenForm 
                        sum={1650}/>
                    )}
                     {this.state.orderForm === 'resident' &&(
                        <OrderResidentForm />
                    )} */}
                    </div>
                    {/* {this.state.orderForm === 'green' &&( */}
                        
                        {/* <div className="basket">
                            <h3>Ваш заказ</h3>
                            <div className="fullBasket">
                            <BasketItems
                            title={this.state.title}
                            size={this.state.size}
                            price={this.state.price}/>
                                <div className="orderBasket">
                                    <div>Сумма: <p>{this.state.price}грн</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )} */}
            </div>

        </div>
        )
    }
}

