import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'



export default class ColorFilter extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
    };
  }
 
  render() {
    const colors = new Array(7)
    .fill('')
    .map( (_, i) => ( {id:i, 
        value:["rgb(228, 50, 58)", "white", "black", "rgb(119, 216, 80)", "rgb(8, 114, 187)", "rgb(238, 239, 68)", "rgb(204, 204, 204)"]} ) )  
    return (
        <div className="colorFilter">
                <p>цвет</p>
            <ul>
            {colors.map(color =>(
                <li key={color.id}>
                <NavLink
            to={`store`}
            style={{background: color.value[color.id]}}>
            </NavLink>
                </li>
            ))}
            </ul>
           

        </div>
    );
  }
}