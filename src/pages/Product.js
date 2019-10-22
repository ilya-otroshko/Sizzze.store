import React from 'react'
import ProductSlider from '../components/product/ProductSlider'
import ProductInfo from '../components/product/ProductInfo'
import ProductDetails from '../components/product/ProductDetails'
import ProductRecomm from '../components/product/ProductRecomm'

export default function Product(){

  return (
      <div className="container ">     
          <ProductSlider />
          <ProductInfo />
          <ProductDetails />
          <ProductRecomm />
      </div>
  )
}