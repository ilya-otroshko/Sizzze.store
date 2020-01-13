import React,{Component} from 'react'

import {NavLink} from 'react-router-dom'

import Select from '../home/Select';

export default class ProductInfo extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      sizes:props.sizes,
      buy: false,
      product: props.product,
    };
  }
      animateButton = (event) => {
        let button = document.querySelectorAll('.bubbly-button')[1]
        button.classList.remove('animate');
         button.classList.add('animate');
        setTimeout(function(){
            button.classList.remove('animate');
        },300);
         this.setState({
        buy: true
    });
        }; 
  render() {
    return (
        <div className="productInfo">
           <h3>{this.state.product.name}</h3> 
           <p className="productPrice">
           {this.state.product.price_sell}грн</p>


           <p className="productCountry">
             Производитель: {this.state.product.made_in}</p>

           <p className="productDescription">
             Описание: </p>
             <p>{this.state.product.description}</p>

            <div className="sizeAndBuy">
              <div className="sizeFilter">
                  <Select 
                  brandName={this.state.sizes}
                  brandValue={'Выберите свой размер'}
                  />
                  </div>
                  <div className="buyAndBasket">
                    {this.state.buy ?(
                      <button
                      onClick={this.animateButton}
                      className='bubbly-button'>
                          Корзина
                    </button>
                    )
                    :(
                      <button
                        onClick={this.animateButton}
                        className='bubbly-button'>
                          Купить
                      </button>
                    )}
                  </div>
            </div>
             <table className="detailsTable">
            <thead>
              <tr>
                <th>Цвет</th>
                <th>Пол</th>
                <th>Производитель</th>
                <th>Страна</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                  <td>
                    <NavLink to={`/color/${this.state.product.color}`}>
                      {this.state.product.color} 
                    </NavLink>
                  </td>
                  <td>
                    <NavLink to={`/gender/${this.state.product.gender}`}>
                      {this.state.product.gender}
                    </NavLink>
                  </td>
                  <td>
                    <NavLink to={`/country/${this.state.product.made_in}`}>
                      {this.state.product.made_in}
                    </NavLink>
                  </td>
              </tr>
            </tbody>
          </table>
        </div>
    );
  }
}