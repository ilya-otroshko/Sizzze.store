import React from 'react';
import StoreHeader from '../components/store/StoreHeader';
import Sidebar from '../components/store/Sidebar';
import Products from '../components/store/ProductsList';



export default function Store(){
  const blocks = new Array(6)
  .fill('')
  .map( (_, i) => ( {id:i + 1} ) )
  const stok = [40, 41, 42, 43, 44]
  return (
      <div className="container store">   
        <StoreHeader />
        <div className="barAndProducts">
          <Sidebar />
          <Products 
          blocks={blocks}
          name="Ugg Neumel Black"
          price="1650"
          stok={stok}
          />
        </div>
      </div>

  )
}