import React,{Component} from 'react';

export default class OrderResidentForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  handleSubmit(event) {

    event.preventDefault();
  }
  render(){
    return (
        <form 
        action=""
        className="residentForm">
        <div>
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
              <div className="passwordOrder">
                  <p>Пароль:</p>
                  <input 
                  type="password"
                  placeholder="Пароль"
                  />
              </div>
            </div>
            <div className="selectOrder">
              <div className="loginButton">
                  <button 
                  className="submitOrder"
                  onClick={this.handleSubmit}>
                    Войти
                  </button>
                </div>
              </div>
        </div>
    </form>
        )
    }
}

