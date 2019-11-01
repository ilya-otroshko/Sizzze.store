import React,{Component} from 'react';
import { connect } from 'react-redux';

 class OrderRecipient extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
    this.inputBlur = this.inputBlur.bind(this);
  }

  inputBlur(event) {
    this.props.changeForm(event.target.name, event.target.value);
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
                onBlur={this.inputBlur}
                name="name"
                />
                <input 
                type="text"
                placeholder="Фамилия"
                className="surnameOrder"
                onBlur={this.inputBlur}
                name="surname"
                />
            </div>
        </div>
        <div className="selectOrder">
                <div className="emailOrder">
                    <p>Email:</p>
                    <input 
                    type="email"
                    placeholder="Email"
                    onBlur={this.inputBlur}
                    name="email"
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
                    onBlur={this.inputBlur}
                    name="phone"
                   />
                </div>
            </div>
            <div className="selectOrder">
                <div className="commentOrder">
                    <p>Комментарий:</p>
                    <textarea 
                    rows="5" 
                    onBlur={this.inputBlur}
                    name="comment"
                    />
                </div>
            </div>
        </div>
        
        )
    }
}

export default connect(
    state => ({}),
    dispatch => ({
        changeForm: (type, value) => {
            dispatch({ type: type, value: value})
        }
    })
  )(OrderRecipient);