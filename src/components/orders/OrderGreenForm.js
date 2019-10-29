import React,{Component} from 'react';
import SelectOrder from './SelectOrder';
import OrderRecipient from './OrderRecipient';

export default class OrderGreenForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      payment: ' hi ',
      paymentMethod: [
        {id: 'cash', name: 'Наложенный платеж'}
      ],
      deliveryMethod: [
        {id: 'newPost', name: 'Новая почта'}
      ]
    };
  }
  select = (count) => {
    this.setState({ 
      payment: count
     })
  }
  handleSubmit(event) {

    event.preventDefault();
  }
  render(){
    console.log(this.state.payment);
    return (
        <form action="">
        <div>
          <SelectOrder 
          method={this.state.paymentMethod}
          title1={"Способ оплаты:"}
          inputValue={"Выберите способ оплаты"}
          select={this.select}
          /> 
           <SelectOrder 
          method={this.state.deliveryMethod}
          title1={"Способ доставки:"}
          inputValue={"Выберите способ доставки"}
          select={this.select}
          /> 
            <OrderRecipient />
            <div className="selectOrder">
                <div className="footerOrder">
                    
                    <div>
                      <p>Всего:</p>
                      <p>{this.props.sum} грн</p>
                    </div>
                    <div>
                      <button 
                      className="submitOrder"
                      onClick={this.handleSubmit}>
                        Оформить заказ
                      </button>
                    </div>
                </div>
            </div>
        </div>
    </form>
        )
    }
}

