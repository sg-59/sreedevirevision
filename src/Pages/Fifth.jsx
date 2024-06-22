import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeAdminData } from '../Redux/Adminslice'

const Fifth = () => {


    const dispatch=useDispatch()

    const data=useSelector((state)=>state.admin.adminInfo)

    function remove(){
        dispatch(removeAdminData())
    }

  return (
    <div>
      {data?.map((li)=>(
        <h3>{li.name}</h3>
      ))}
      <button onClick={remove}>Remove Data</button>
    </div>
  )
}

export default Fifth
