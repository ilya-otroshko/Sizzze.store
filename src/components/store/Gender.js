import React,{Component} from 'react'




export default class Gender extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      genders: [
        {id: 'female', name: 'Female'},
        {id: 'male', name: 'Male'},
        {id: 'unisex', name: 'Unisex'}
      ]
    };
  }
 
  render() {
   
    return (
        <div className="gender">
            <p>Gender</p>
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