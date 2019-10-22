import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'



export default class ColorFilter extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
    };
  }
 
  render() {
    const colors = new Array(8)
    .fill('')
    .map( (_, i) => ( {id:i, 
        value:["red", "white", "black", "green", "blue", "pink", "yellow", "gray"]} ) )  
    return (
        <div className="colorFilter">
                <p>Color</p>
            <ul>
            {colors.map(color =>(
                <li key={color.id}>
                <NavLink
            to={`/color/${color.value[color.id]}`}
            style={{background: color.value[color.id]}}>
            </NavLink>
                </li>
            ))}
            </ul>
           

        </div>
    );
  }
}