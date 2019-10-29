import React,{Component} from 'react';

export default class OrderRecipient extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){
    return (
        <div>
            <div className="selectOrder">
            <div className="recipInformation">
            <p>Информация о получателе:</p>  
                <input 
                type="text"
                placeholder="Имя"
                className="nameOrder"
                />
                <input 
                type="text"
                placeholder="Фамилия"
                className="surnameOrder"/>
            </div>
        </div>
        <div className="selectOrder">
                <div className="emailOrder">
                    <p>Email:</p>
                    <input 
                    type="email"
                    placeholder="Email"
                    />
                </div>
            </div>
            <div className="selectOrder">
                <div className="phoneOrder">
                    <p>Телефон:</p>
                    <input 
                    type="phone"
                    defaultValue
                    ="+380"
                   />
                </div>
            </div>
            <div className="selectOrder">
                <div className="commentOrder">
                    <p>Комментарий:</p>
                    <textarea rows="5" />
                </div>
            </div>
        </div>
        
        )
    }
}

