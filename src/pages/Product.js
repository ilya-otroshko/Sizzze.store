import React from 'react'
import ProductSlider from '../components/product/ProductSlider'
import ProductInfo from '../components/product/ProductInfo'
import ProductRecomm from '../components/product/ProductRecomm'

export default function Product(){

  return (
      <div className="container productWrapper">   
        <div className="product">
            <ProductSlider />
            <ProductInfo />
        </div>  
          <ProductRecomm />
      </div>
  )
}