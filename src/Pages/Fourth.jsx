import axios from 'axios';
import React from 'react'
import { useDispatch } from 'react-redux';
import { addtoadminData } from '../Redux/Adminslice';

const Fourth = () => {

    const dispatch=useDispatch()
    
  function display(){
    axios.get('https://jsonplaceholder.typicode.com/users').then((Apidata)=>{
      console.log(Apidata.data);
dispatch(addtoadminData(Apidata.data))
 
    })
  }
  return (
    <div>
      <button onClick={display}>click me</button>
    </div>
  )
}

export default Fourth
