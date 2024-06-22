import {createSlice} from '@reduxjs/toolkit'

const AdminData=createSlice({
    name:"admin",
    initialState:{
        adminInfo:null,
    },
    reducers:{
        addtoadminData:(state,action)=>{
            console.log("action value......",action);
state.adminInfo=action.payload
        },
        removeAdminData:(state,action)=>{
            state.adminInfo=null
        }

      
    }
})

export const {addtoadminData,removeAdminData}=AdminData.actions
export default AdminData.reducer