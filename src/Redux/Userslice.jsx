import {createSlice} from '@reduxjs/toolkit'

const user=createSlice({
    name:"userData",
    initialState:{
        userInfo:[]
    },
    reducers:{
addtoData:(state,action)=>{
    console.log("action values",action);
    state.userInfo.push(action.payload)
},
deletetoData:(state,action)=>{
    state.userInfo=[]
}
    }
})

export const {addtoData,deletetoData} =user.actions
export default user.reducer