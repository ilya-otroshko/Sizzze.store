import React,{Component} from 'react'

import {NavLink} from 'react-router-dom'

import Select from '../home/Select';

export default class ProductInfo extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
        buy: false,
        color: 'черный',
        gender: 'мужские',
        title: 'Ugg Neumel Black',
        price: 1650,
        sizes: [
          {id: 36, name: 36, count: 0, stock: ''},
          {id: 37, name: 37, count: 2, stock: 'inStock'},
          {id: 38, name: 38, count: 0, stock: ''},
          {id: 39, name: 39, count: 2, stock: 'inStock'},
          {id: 40, name: 40, count: 0, stock: ''},
          {id: 41, name: 41, count: 0, stock: ''},
          {id: 42, name: 42, count: 2, stock: 'inStock'},
          {id: 43, name: 43, count: 0, stock: ''},
          {id: 44, name: 44, count: 1, stock: 'inStock'},
          {id: 45, name: 45, count: 0, stock: ''},

        ],
        country: 'китай',
        description: 'Сегодня UGG – это самый популярный производитель угг. Каждый сезон бренд выпускает разнообразные новые модели – от очень коротких до высоких, от водоотталкивающих и практичных до декорированных и эпатажных. Сапоги UGG сделаны из высококачественной овчины. Легкая, прочная, формованная подошва предотвращает скольжение. Стелька из овчины, латекса и пены, выдерживает любой холод и защищает от попадания влаги. Поверхность сапог не деформируется и не теряет свой первоначальный вид, она не пропускает влагу и способствует сохранению комфорта и уюта. Все модели бренда UGG не требуют особого ухода, что обеспечивает удивительную длительность их использования.'
    };
  }
  buyToggleList = () => {
         
    this.setState({
        buy: true
    });
  }
  render() {
    return (
        <div className="productInfo">
           <h3>{this.state.title}</h3> 
           <p className="productPrice">
           {this.state.price}грн</p>


           <p className="productCountry">
             Производитель: {this.state.country}</p>

           <p className="productDescription">
             Описание: </p>
             <p>{this.state.description}</p>

            <div className="sizeAndBuy">
              <div className="sizeFilter">
                  <Select 
                  brandName={this.state.sizes}
                  title1={'Размер:'}
                  colorIcon={'black'}
                  bg={'#baadc3'}
                  brandValue={'Выберите свой размер'}
                  />
                  </div>
                  
                  <div className="buyAndBasket">
                    {this.state.buy ?(
                      <button>
                          Корзина
                    </button>
                    )
                    :(
                      <button
                        onClick={this.buyToggleList}>
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
                    <NavLink to={`/color/${this.state.color}`}>
                      {this.state.color} 
                    </NavLink>
                  </td>
                  <td>
                    <NavLink to={`/gender/${this.state.gender}`}>
                      {this.state.gender}
                    </NavLink>
                  </td>
                  <td>
                    <NavLink to={`/country/${this.state.country}`}>
                      {this.state.country}
                    </NavLink>
                  </td>
              </tr>
            </tbody>
          </table>
        </div>
    );
  }
}