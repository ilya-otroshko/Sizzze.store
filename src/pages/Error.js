import React from 'react'

import Footer from '../components/footer/Footer'
import logo from '../images/404.gif'

export default function Error(){

  return (
      <div>
        <div className="errorPage">
          <div>
            <img src={logo} alt="loading..." />
          </div>
          <div>
            <h2> ПЕЙДЖ НОТ ФАУНД </h2>
            <h3>Ошибка 404.</h3>
            <h3>Такая страница не существует либо она была удалена.</h3>
          </div> 
         </div>
      <Footer />
      </div>
  )
}