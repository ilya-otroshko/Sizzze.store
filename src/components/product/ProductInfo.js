import React,{Component} from 'react'


export default class ProductInfo extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
        title: 'Ugg Neumel Black',
        price: 1650,
        sizes: [
          {id: 36, count: 0, stock: ''},
          {id: 37, count: 2, stock: 'inStock'},
          {id: 38, count: 0, stock: ''},
          {id: 39, count: 2, stock: 'inStock'},
          {id: 40, count: 0, stock: ''},
          {id: 41, count: 0, stock: ''},
          {id: 42, count: 2, stock: 'inStock'},
          {id: 43, count: 0, stock: ''},
          {id: 44, count: 1, stock: 'inStock'},
          {id: 45, count: 0, stock: ''},

        ],
        country: 'Китай',
        description: 'Сегодня UGG – это самый популярный производитель угг. Каждый сезон бренд выпускает разнообразные новые модели – от очень коротких до высоких, от водоотталкивающих и практичных до декорированных и эпатажных. Сапоги UGG сделаны из высококачественной овчины. Легкая, прочная, формованная подошва предотвращает скольжение. Стелька из овчины, латекса и пены, выдерживает любой холод и защищает от попадания влаги. Поверхность сапог не деформируется и не теряет свой первоначальный вид, она не пропускает влагу и способствует сохранению комфорта и уюта. Все модели бренда UGG не требуют особого ухода, что обеспечивает удивительную длительность их использования.'
    };
  }
 
  render() {
    
    return (
        <div className="productInfo">
           <h3>{this.state.title}</h3> 
           <p className="productPrice">
           {this.state.price}uah</p>


           <p className="productCountry">
             Country: {this.state.country}</p>

           <p className="productDescription">
             Description: {this.state.description}</p>

             <table className="sizeTable">
               <thead>

               <tr>
                 <th>Size</th>
                 {this.state.sizes.map(size => (
                    <td key={size.id}
                    className={size.stock}>
                    {size.id}</td>
                 ))}
               </tr>
               </thead>

               <tbody>
               <tr>
                 <th>Count</th>
               {this.state.sizes.map(size => (
                    <td key={size.id}
                    className={size.stock}>
                    {size.count}</td>
                 ))}
               </tr>
               </tbody>
               
             </table>
        </div>
    );
  }
}