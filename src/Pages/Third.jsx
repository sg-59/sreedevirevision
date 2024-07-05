import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { deletetoData } from '../Redux/UserSlice';

const Third = () => {

    const dispatch=useDispatch()

    const getDatainthirdpage=useSelector((state)=>state.userData.userInfo[0])
    console.log("get data in useselector in third page",getDatainthirdpage);

    function remove(){
        dispatch(deletetoData())
    }

  return (
    <div>
      {getDatainthirdpage?.map((li)=>(
        <>
        <h3>{li.name}</h3>
        <h5>{li.email}</h5>
        </>
      ))}
      <button onClick={remove}>Remove</button>
    </div>
  )       
}

export default Third
