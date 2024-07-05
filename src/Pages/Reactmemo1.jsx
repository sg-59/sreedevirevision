import React, { useState } from 'react'
// import Reactmemo2 from './Reactmemo2'
import { Reactmemoized } from './Reactmemo2';
import { useCallback } from 'react';
const Reactmemo1 = () => {

    const [state,setState]=useState(0)
    const [state1,setState1]=useState(0)

    console.log("parent re-rendering");

    function display(){
        console.log("hello world");
    }

    const memoizedfunction=useCallback(display,[state])

  return (
    <div>
        <h1>{state}</h1>
      <button onClick={()=>setState(state+1)}>state</button>
      <button onClick={()=>setState1(state1+1)}>state 1</button>
      <Reactmemoized data={memoizedfunction}/>
    </div>
  )
}

export default Reactmemo1
