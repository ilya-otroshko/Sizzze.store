import React from 'react';
import { SlideBlock } from '../components/home/SlideBlock';


export default function Store(){
  const blocks = new Array(1)
  .fill('')
  .map((_, i) => ({id: i, src: `${i + 1}`}))
  return (
      <div>   
        <SlideBlock  blocks={blocks}/>
      </div>

  )
}