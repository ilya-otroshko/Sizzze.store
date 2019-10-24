import React,{Component} from 'react'

import {NavLink} from 'react-router-dom'

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      color: 'black',
      gender: 'male',
      country: 'china'
    };
  }
 
  render() {
   
    return (
        <div className="productDetails">
            <p>Details</p>
          <table className="detailsTable">
            <tbody>

              <tr>
                <th>Color</th>
                <td>
                  <NavLink to={`/color/${this.state.color}`}>
                    {this.state.color}
                  </NavLink>
                </td>
              </tr>

              <tr>
                <th>Gender</th>
                <td>
                  <NavLink to={`/gender/${this.state.gender}`}>
                    {this.state.gender}
                  </NavLink>
                </td>
              </tr>
              <tr>
                <th>Country</th>
                <td>
                  <NavLink to={`/country/${this.state.country}`}>
                    {this.state.country}
                  </NavLink>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
    );
  }
}