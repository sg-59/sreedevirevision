import React, { useContext } from 'react'
import { UserContext } from './Statemanagement';

const Sub = () => {

    const {state}=useContext(UserContext)
    console.log("final value",state);
  return (
    <div>
   {state?.map((li)=>(
    <h1>{li.name}</h1>
   ))}
    </div>
  )
}

export default Sub
