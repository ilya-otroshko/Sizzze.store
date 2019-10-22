import React,{Component} from 'react'


export default class ProductInfo extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
        title: 'Adidas Alphaedge 4D',
        price: 1300,
        sizes: '36-40',
        country: 'Вьетнам',
        description: 'Изящные женские кроссовки adidas Alphaedge 4D – стильная модель, которая обещает максимум комфорта в повседневной носке. Оригинальная подошва выполнена из материала Carbon 4D, гарантирующего эффективное поглощение ударов о землю и контролируемый возврат энергии. Резиновый протектор заботится о надежном сцеплении с любой поверхностью. Верхняя часть кроссовок сделана из серо-белого текстильного материала Primeknit, который отличается особой легкостью, обеспечивая ощущение «второй кожи».'
    };
  }
 
  render() {
   
    return (
        <div className="productInfo">
           <h3>{this.state.title}</h3> 
           <p className="productPrice">{this.state.price}uah</p>
           <p className="productSizes">Sizes: {this.state.sizes}</p>
           <p className="productCountry">County: {this.state.country}</p>
           <p className="productDescription">Description: {this.state.description}</p>
        </div>
    );
  }
}