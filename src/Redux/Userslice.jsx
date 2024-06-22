import {createSlice} from '@reduxjs/toolkit'

const userData=createSlice({
    name:"user",
    initialState:{
        userInfo:null,
        productData:[]
    },
    reducers:{
        addtoData:(state,action)=>{
            console.log("action value......",action);
state.userInfo=action.payload
        },
        removeData:(state,action)=>{
state.userInfo=null
        },
        addtoProductData:(state,action)=>{
            state.productData.push(action.payload)
        }
    }
})

export const {addtoData,removeData,addtoProductData}=userData.actions
export default userData.reducer