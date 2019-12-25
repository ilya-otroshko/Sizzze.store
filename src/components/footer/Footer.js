import React, {Component} from 'react'

import Image from 'react-image-webp';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTruck } from '@fortawesome/free-solid-svg-icons'
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons'



class Footer extends Component {
      animateButton = (event) => {
        let button = document.querySelectorAll('.bubbly-button')[1]
        button.classList.remove('animate');
         button.classList.add('animate');
        setTimeout(function(){
            button.classList.remove('animate');
        },300);
        }; 
      
      render(){
  return (
        <div className="footer">
          <Image
            src={require('../../images/footer.jpeg')}
            webp={require('../../images/footer.webp')}
          />
            <div
            className='bubbly-button'
            onClick={this.animateButton}>
              <FontAwesomeIcon
              icon={faTruck} />
              <FontAwesomeIcon
              icon={faInstagram} 
              onClick={() => { 
                window.location.href = 'https://www.instagram.com/sizzze.store';return null;
              }}/>
              <FontAwesomeIcon
              icon={faInstagram} 
              onClick={() => { 
                window.location.href = 'https://www.instagram.com/sizzze.store';return null;
              }}/>
               <FontAwesomeIcon
              icon={faBoxOpen} />
            </div>
        </div>

    )
  }
}

       

 
export default Footer;
