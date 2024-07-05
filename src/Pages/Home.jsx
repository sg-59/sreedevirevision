import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { addtoData } from '../Redux/UserSlice'

const Home = () => {

    const dispatch=useDispatch()

    const[state,setState]=useState([])

useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then((data)=>{
        console.log("values in api",data.data);
       dispatch(addtoData(data.data))
        setState(data.data)
    })
},[])

  return (
    <div>
      <h1>Home</h1>
      <Link to={`/sub`}>Sub</Link>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Link to={`/third`}>third</Link>
      <br></br>
      <br></br>
      {state?.map((li)=>(
        <>
        <h3>{li.name}</h3>
        <h5>{li.email}</h5>
        </>
      ))}
    </div>
  )
}

export default Home
