import React, { useState }  from 'react'
import { useSelector } from 'react-redux'



const Third = () => {
const title=useSelector((state)=>state.user.productData[0])

console.log("title",title);
  return (
    <div>
{title && title.map((li)=>(
  <h3>{li.title}</h3>
))}
    </div>
  )
}

export default Third
