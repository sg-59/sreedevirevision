import React from 'react'
import { useSelector } from 'react-redux'


const Sub = () => {

    const getData=useSelector((state)=>state.userData.userInfo[0])
    console.log("get data in useselector",getData);

  return (
    <div>
      {getData?.map((li)=>(
        <>
        <h3>{li.name}</h3>
        <h5>{li.email}</h5>
        </>
      ))}
    </div>
  )
}

export default Sub
