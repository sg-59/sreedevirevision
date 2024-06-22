import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addtoData } from '../Redux/Userslice'


const First = () => {

  const dispatch=useDispatch()


  const [state,setState]=useState([])



  function display(){
    axios.get('https://jsonplaceholder.typicode.com/users').then((Apidata)=>{
      console.log(Apidata.data);
dispatch(addtoData(Apidata.data))
      setState(Apidata.data)
 
    })
  }

  
  return (
    <div>
<h1>First page</h1>

<button onClick={display}>Api fetch</button>

<Link to={'/second'}>Connect to second page</Link>
<br></br>
<br></br>
<br></br>
<Link to={'/third'}>Connect to third page</Link>

{state && state.map((li)=>(
  <div key={li.id}>
  <h2>{li.name}</h2>
  <h4>{li.email}</h4>
  </div>
))}
    </div>
  )
}

export default First
