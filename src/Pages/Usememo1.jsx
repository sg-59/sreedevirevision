import React, { useMemo, useState } from 'react'

const Usememo1 = () => {
    
    const [first,setFirst]=useState(0)
    const [second,setSecond]=useState(0)


// function check(){
//     var i=0
//     while(i<2000000000){
//         i++
//     }

//     return first % 2==0
//     }

// console.log(check());

const check=useMemo(()=>{
    var i=0
    while(i<2000000000){
        i++
    }

    return first % 2==0
},[first])

  return (
    <div>
        <h3>First button value :={first}   ,  {check ? <h1>Even</h1> : <h1>Odd</h1>} </h3>
   <button onClick={()=>setFirst(first+1)}>First Button</button>
   <br />
   <br />
   <br />
   <h3>Second button value :={second} </h3>
   <button onClick={()=>setSecond(second+1)}>Second Button</button>
    </div>
  )
}

export default Usememo1
