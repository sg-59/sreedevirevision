import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addtoProductData, removeData } from '../Redux/Userslice'
import axios from 'axios'



const Seond = () => {



const dispatch=useDispatch()


function display(){
  axios.get('https://jsonplaceholder.typicode.com/albums').then((Apidata)=>{
    console.log(Apidata.data);
dispatch(addtoProductData(Apidata.data))
  

  })
}
const getData=useSelector((state)=>state.user.userInfo)
console.log("get data in second page",getData);

function removedatas(){
dispatch(removeData())
}


  return (
    <div>
{getData && getData.map((li)=>{
  return(
    <div key={li.id}>
    <h1>{li.name}</h1>
    <h3>{li.email}</h3>
    </div>
  )
})}
<button onClick={removedatas}>Remove Data</button>
<button onClick={display}>Api fetch</button>
      </div>
  )
}

export default Seond


