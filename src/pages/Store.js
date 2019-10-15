import React from 'react';
import StoreHeader from '../components/store/StoreHeader';
import Sidebar from '../components/store/Sidebar';
import {Products} from '../components/store/Products';



export default function Store(){
  const blocks = new Array(6)
  .fill('')
  .map( (_, i) => ( {id:i, src:`${i+1}`} ) )
  return (
      <div className="container store">   
        <StoreHeader />
        <div className="barAndProducts">
          <Sidebar />
          <Products blocks={blocks}/>
        </div>
      </div>

  )
}