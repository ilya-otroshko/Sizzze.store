import React, {Fragment} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

import Navbar from './Navbar'

export const Header = () => {
  return (
    <Fragment>

        <div style={{height:'156px'}}>

        <div style={{position:'relative'}}>

            <div className="insta"
            onClick={() => { 
              window.location.href = 'https://www.instagram.com/sizzze.store'; 
              return null;
              }}>
            <FontAwesomeIcon
            icon={faInstagram}
            />
            </div>
          <h1>sizzze | store</h1>
        </div>
        
        <Navbar />
        </div>

    </Fragment>
  )
}
