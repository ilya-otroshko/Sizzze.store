import React,{Component} from 'react'




export default class Gender extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      genders: [
        {id: 'female', name: 'женский'},
        {id: 'male', name: 'мужской'},
        {id: 'unisex', name: 'унисекс'}
      ]
    };
  }
 
  render() {
   
    return (
        <div className="gender">
            <p>пол</p>
            {this.state.genders.map(gender => (
              <div key={gender.id}>
              <input type="checkbox" className="checkbox" id={gender.id} defaultChecked={this.state.chkbox} onChange={this.handleChangeChk} />
              <label htmlFor={gender.id}>{gender.name}</label>
            </div>
            ))}
           
        </div>
    );
  }
}