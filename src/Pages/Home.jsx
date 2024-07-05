import React, { useContext, useState } from 'react'
import axios from 'axios'
import { UserContext } from './Statemanagement'
import { Link } from 'react-router-dom'
const Home = () => {

    const {dispatch}=useContext(UserContext)

    const [state,setState]=useState([])

    function display(){
        axios.get('https://jsonplaceholder.typicode.com/users').then((data)=>{
            console.log("api fetch values",data.data);
            setState(data.data)
            dispatch({message:"success",response:data.data})
        })
    }

  return (
    <div>
  <button onClick={display}>Click me</button>
{state?.map((li)=>(
    <h1>{li.name}</h1>
))}
  <Link to={'/sub'}>Sub page</Link>
    </div>
  )
}

export default Home
