import React,{Component} from 'react'




export default class Gender extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
    };
  }
 
  render() {
   
    return (
        <div className="gender">
            <p>Gender</p>
            <div>
              <input type="checkbox" className="checkbox" id="female" defaultChecked={this.state.chkbox} onChange={this.handleChangeChk} />
              <label htmlFor="female">Female</label>
            </div>
            
            <div>
              <input type="checkbox" className="checkbox" id="male" defaultChecked={this.state.chkbox} onChange={this.handleChangeChk} />
              <label htmlFor="male">Male</label>
            </div>
            
            <div>
                <input type="checkbox" className="checkbox" id="unisex" defaultChecked={this.state.chkbox} onChange={this.handleChangeChk} />
                <label htmlFor="unisex">Unisex</label>   
            </div>

           
        </div>
    );
  }
}