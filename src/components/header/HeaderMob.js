import React,{Component} from 'react'


export default class HeaderMob extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
    
    };
  }
  showSettings (event) {
    event.preventDefault();

  }
  render() {

    return (
        <div className="headerMob">
            <h2>sizzze | store</h2>

        </div>    
    )
  }
}

